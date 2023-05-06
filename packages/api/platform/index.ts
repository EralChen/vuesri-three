import { PlatformInfo } from '@skzz-template/shared/types'
import { usePlatformStore } from '@skzz-template/stores/platform'
import { request } from '@skzz-template/shared/fetch/public'
import { restFetch as platformRestFetch } from '@skzz-template/shared/fetch/platform'

export const rPlatfroms = async () => { 
  return request<PlatformInfo[]>({
    method: 'GET',
    url: '/platforms.json',
    cache: {
      id: 'platforms',
    },
  }).then(res => {
    res.forEach(item => {
      if (item.code === 'default') {
        item.url = platformRestFetch.baseURL
      }
    })
    return res
  })
}

export const rPlatfromByCode = async (code: string) => {
  return rPlatfroms().then(res => {
    return res.find(item => item.code === code) 
  }).then(res => {
    if (res) {
      const platformStore = usePlatformStore()
      platformStore.setPlatformInfo(res)
    }
    return res
  })
}

export const rDefaultPlatfrom = async () => { 
  return rPlatfroms().then(list => list[0])
}
