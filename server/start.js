'use strict'

const { resolve } = require('path')
const r = path => resolve(__dirname, path)

require('babel-register')({
  'presets': [
    'stage-3',
    ['latest-node', { 'target': 'current' }]
  ],
  'plugins': [
    'transform-decorators-legacy'
  ]
})

require('babel-polyfill')
require('./server')
