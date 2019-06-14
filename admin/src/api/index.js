import axios from 'axios'

// 注册一个拦截器处理响应
axios.interceptors.response.use((response) => {
  return response.data || {}
}, function (err) {
  return Promise.reject(err)
})

const URL_PREFIX = process.env.NODE_ENV === 'production' ? '' : 'http://127.0.0.1:3008/api/'

export const getAll = () => axios.get(`${URL_PREFIX}article_overview/getAll`)

export const getArticleById = (id) => axios.get(`${URL_PREFIX}article_overview/get/${id}`)

export const updateArticleById = (id, param = {}) => axios.post(`${URL_PREFIX}article_overview/update/${id}`, { ...param })

export const addArticle = (param = {}) => axios.put(`${URL_PREFIX}article_overview/add`, { ...param })

export const login = (param = {}) => axios.post(`${URL_PREFIX}article_overview/login`, { ...param })
