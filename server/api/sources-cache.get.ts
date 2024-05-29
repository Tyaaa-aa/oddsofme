import { promises as fs } from 'fs'
import path from 'path'
import { supabase } from '../supabase'

const cacheFilePath = path.join(process.cwd(), 'sources-cache.json')
createCacheFileIfNotExists()

export default defineEventHandler(async (event) => {
  try {
    const cachedData = await readCachedData()
    return cachedData
  } catch (err) {
    console.warn(err)
    try {
      await updateCache()
      const updatedCachedData = await readCachedData()
      return updatedCachedData
    } catch (fetchError) {
      console.error('Error updating cache and fetching data:', fetchError)
      return { error: 'An error occurred while updating the cache and fetching data' }
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
  try {
    console.warn('Updating cache...')
    const data = await fetchDataFromDatabase()
    const jsonData = JSON.stringify(data, null, 2)
    await fs.writeFile(cacheFilePath, jsonData)
    console.log('\x1b[32m', 'Sources cache updated!')
    return { message: 'Data cached successfully', data }
  } catch (err) {
    console.error('Error updating cache:', err)
    return { error: 'An error occurred while processing the request' }
  }
}

async function fetchDataFromDatabase() {
  try {
    const { data, error } = await supabase
      .from('questions')
      .select(`trait_id, source, category`)
      .order('trait_id', { ascending: true })
    if (error) {
      throw error
    } else {
      return data as Sources[]
    }
  } catch (err) {
    throw new Error('Error fetching sources')
  }
}

async function createCacheFileIfNotExists() {
  try {
    await fs.access(cacheFilePath)
  } catch (err) {
    const dirPath = path.dirname(cacheFilePath)
    await fs.mkdir(dirPath, { recursive: true })
    await fs.writeFile(cacheFilePath, '')
    console.log(`Created ${cacheFilePath}`)
  }
}