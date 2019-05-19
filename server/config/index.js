'use strict'

const MONGODB = {
  uri: 'mongodb://127.0.0.1:27017/blog_test',
  prouri: 'mongodb://xxxxx@xxxxx/blog'
}

const APP = {
  ROOT_PATH: '/api',
  LIMIT: 10,
  PORT: 3008
}

export default {
  MONGODB,
  APP
}
