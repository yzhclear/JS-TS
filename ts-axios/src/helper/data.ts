import { isPlainObject } from './util'

export function transformData(data: any) {
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}
