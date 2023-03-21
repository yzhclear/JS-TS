import { buildURL } from './helper/url'
import { transformData } from './helper/data'
import { processHeaders } from './helper/headers'
import { AxiosRequestConfig } from './types/index'
import xhr from './xhr'

function transformUrl(config: AxiosRequestConfig): string {
  const { url, params = '' } = config
  return buildURL(url, params)
}

function transformRequestData(config: AxiosRequestConfig): any {
  return transformData(config.data)
}

function transformHeaders(config: AxiosRequestConfig): any {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformUrl(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}

function axios(config: AxiosRequestConfig) {
  processConfig(config)
  xhr(config)
}

export default axios
