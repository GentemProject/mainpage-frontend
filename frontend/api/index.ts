import * as axios from 'axios'

const apiProd = 'https://api.gentem.org'

export const BASE_API = apiProd

export const api: axios.AxiosInstance = axios.default.create({
  baseURL: BASE_API,
})

api.defaults.headers.post['Content-Type'] = 'application/json'
api.defaults.headers.delete['Content-Type'] = 'application/json'
api.defaults.headers.put['Content-Type'] = 'application/json'
