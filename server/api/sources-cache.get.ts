import { promises as fs } from 'fs'
import path from 'path'
import { useFetch } from 'nuxt/app'

const cacheFilePath = path.join(process.cwd(), 'server/cache/sources-cache.json')

export default defineEventHandler(async (event) => {
  try {
    const cachedData = await readCachedData()
    return cachedData
  } catch (err) {
    console.error('Error reading cached data:', err)
    try {
      await updateCache()
      const updatedCachedData = await readCachedData()
      return updatedCachedData
    } catch (fetchError) {
      console.error('Error updating cache and fetching data:', fetchError)
      const databaseData = await fetchDataFromDatabase()
      return databaseData
    }
  }
})

async function readCachedData() {
  const data = await fs.readFile(cacheFilePath, 'utf8')
  if (!data) {
    throw new Error('No cached data found')
  }
  return JSON.parse(data)
}

async function updateCache() {
  const { error } = await useFetch('/api/update-sources-cache')
  if (error) {
    throw new Error('There was an error updating the cache')
  }
}

async function fetchDataFromDatabase() {
  const { data, error } = await useFetch('/api/sources')
  if (error) {
    throw new Error('There was an error fetching the sources from the database')
  }
  return data
}