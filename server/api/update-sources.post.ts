import { supabase } from '../supabase'
import { promises as fs } from 'fs'
import path from 'path'

interface Sources {
  trait_id: number,
  source: string,
  category: string
}

const cacheFilePath = path.join(process.cwd(), 'sources-cache.json')

export default defineEventHandler(async (event) => {
  try {
    const { data, error } = await supabase
      .from('questions')
      .select(`trait_id, source, category`)
      .order('trait_id', { ascending: true })
    if (error) {
      console.error('Error fetching sources:', error)
      throw new Error('Error fetching sources from Supabase')
    }

    const jsonData = JSON.stringify(data as Sources[], null, 2) // Pretty print 2-spaces

    await fs.writeFile(cacheFilePath, jsonData)

    return { message: 'Data cached successfully', data }
  } catch (err) {
    console.error('Error processing request:', err)
    return { error: 'An error occurred while processing the request' }
  }
})
