import apiUrl from "../apiConfig"
import { ADD_CACHE } from "../context/action-types"

export const updateCache = async (serverUsers, cachedPfps, dispatch) => {
  const storage = window.sessionStorage
  const unCached = serverUsers.filter(user => !cachedPfps.some(id => id !== user._id))
  try {
    const cachePairs = await Promise.all(
			unCached.map(async (userObj) => {
				const cacheObj = { userName: userObj.userName }
				const response = await fetch(apiUrl + '/img/' + userObj.userName)
				const type = response.headers.get('Content-Type')
				const data = await response.arrayBuffer()
				cacheObj.data = bufferToString(type, data)
				return cacheObj
			})
		)
    const newCache = cachedPfps.length === 0
      ? []
      : [...cachedPfps]
		cachePairs.forEach((cacheObj) => {
			storage.setItem(cacheObj.userName, cacheObj.data)
			newCache.push(cacheObj.userName)
		})
    dispatch({
      type: ADD_CACHE,
      payload: newCache
    })
    return true
  } catch(err) {
    console.error(err)
    return false
  }
}

export const getPfp = (userName) => {
  const storage = window.sessionStorage
  let data = storage.getItem(userName)
  return data ? data : apiUrl + '/img/' + userName
}

const bufferToString = (type, arrayBuffer) => {
  const prefix = `data:${type};base64,`
  let binary = ''
  const bytes = new Uint8Array(arrayBuffer)
  bytes.forEach(byte => binary += String.fromCharCode(byte))
  return prefix + window.btoa(binary)
}

// export const testCache = async (userName) => {
//   const result = await fetch(apiUrl + '/img/' + userName)
//   console.log('result headers:')
//   console.log(result.headers)
//   const buffer = await result.arrayBuffer()
//   console.log(buffer)
//   console.log('type:')
//   const type = result.headers.get('Content-Type')
//   console.log(type)
//   const binary = bufferToString(type, buffer)
//   console.log(binary)
// }