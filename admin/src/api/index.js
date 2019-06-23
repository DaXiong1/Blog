import axios from 'axios'

// 注册一个拦截器处理请求
axios.interceptors.request.use((req) => {
  // 非get请求加token校验
  if (req.method !== 'get') {
    req.headers.Authorization = window.localStorage.getItem('token') || ''
  }
  return req
}, function (err) {
  return Promise.reject(err)
})

// 注册一个拦截器处理响应
axios.interceptors.response.use((response) => {
  const data = response.data || {}
  if (data.code === -9999) { // 未登录
    window.sessionStorage.setItem('cur_url', location.href)
    location.href = (process.env.NODE_ENV === 'production' ? 'http://120.76.176.165:8080' : 'http://127.0.0.1:8080') + '#/login'
  }
  return data
}, function (err) {
  return Promise.reject(err)
})

const URL_PREFIX = process.env.NODE_ENV === 'production' ? 'http://120.76.176.165:3008/api/' : 'http://127.0.0.1:3008/api/'

export const getAll = () => axios.get(`${URL_PREFIX}article_overview/getAll`)

export const getArticleById = (id) => axios.get(`${URL_PREFIX}article_overview/get/${id}`)

export const updateArticleById = (id, param = {}) => axios.post(`${URL_PREFIX}article_overview/update/${id}`, { ...param })

export const addArticle = (param = {}) => axios.put(`${URL_PREFIX}article_overview/add`, { ...param })

export const login = (param = {}) => axios.post(`${URL_PREFIX}users/login`, { ...param })
