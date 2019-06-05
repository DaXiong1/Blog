'use strict'

import Router from 'koa-router'
import { resolve } from 'path'
import glob from 'glob'
import R from 'ramda'
import _ from 'lodash'

export let routersMap = new Map()
export const symbolPrefix = Symbol('prefix')
export const isArray = v => _.isArray(v) ? v : [v]
export const normalizePath = path => path.startsWith('/') ? path : `/${path}`

export default class Route {
  constructor (app, apiPath) {
    this.app = app
    this.router = new Router()
    this.apiPath = apiPath
  }

  init () {
    glob.sync(resolve(this.apiPath, './*.js')).forEach(require)

    for (let [ conf, controller ] of routersMap) {
      const controllers = isArray(controller)
      let prefixPath = conf.target[symbolPrefix]
      if (prefixPath) prefixPath = normalizePath(prefixPath)

      const routerPath = prefixPath + conf.path

      this.router[conf.method](routerPath, ...controllers)
    }
    this.app.use(this.router.routes())
    this.app.use(this.router.allowedMethods())
  }
}

export const router = conf => (target, key, desc) => {
  conf.path = normalizePath(conf.path)

  routersMap.set({
    target: target,
    ...conf
  }, target[key])
}
// controller装饰器
export const controller = path => (target) => { target.prototype[symbolPrefix] = path }

export const get = path => router({
  method: 'get',
  path: path
})

export const post = path => router({
  method: 'post',
  path: path
})

export const put = path => router({
  method: 'put',
  path: path
})

export const del = path => router({
  method: 'delete',
  path: path
})

const decorate = (args, middleware) => {
  let [ target, key, descriptor ] = args

  target[key] = isArray(target[key])
  target[key].unshift(middleware)

  return descriptor
}

export const convert = middleware => (...args) => decorate(args, middleware)
// required装饰器
export const required = rules => convert(async (ctx, next) => {
  let errors = []

  const check = (value, key) => {
    // 判断ctx.request.body里面的字段
    errors = R.filter(element => !R.has(element, ctx.request[key]))(value)
  }
  // rules中的每个属性都执行check函数
  R.forEachObjIndexed(check)(rules)

  if (errors.length) ctx.throw(-1000, `${errors.join(', ')} 参数缺失`)

  await next()
})
