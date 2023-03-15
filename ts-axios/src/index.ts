import { buildURL } from './helper/url'
import { AxiosRequestConfig } from './types/index'
import xhr from './xhr'

function transformUrl(config: AxiosRequestConfig): string {
  const { url, params = '' } = config
  return buildURL(url, params)
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformUrl(config)
}

function axios(config: AxiosRequestConfig) {
  processConfig(config)
  xhr(config)
}

export default axios
