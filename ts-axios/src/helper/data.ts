import { isPlainObject } from './util'

export function transformData(data: any) {
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}

export function transformResponse(data: any): any {
  try {
    if (typeof data === 'string') {
      data = JSON.parse(data)
    }
  } catch (error) {
    console.log(error)
  }
  return data
}
