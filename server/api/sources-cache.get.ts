import { NLDServer } from '../NLDServer'

export default defineEventHandler(async (event) => {
  const cacheFile = 'sources-cache.json'
  const cachedData = await NLDServer('read', cacheFile)
  
  if (!cachedData.ok) {
    throw new Error(cachedData.error)
  }
  try {
    if (typeof cachedData.data === 'string') {
      return JSON.parse(cachedData.data)
    } else {
      return cachedData
    }
  } catch (error) {
    throw new Error('Invalid JSON data in cache file')
  }
})
