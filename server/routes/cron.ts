import { supabase } from '../supabase'
import { NLDServer } from '../NLDServer'

export default defineEventHandler(async (event) => {
  const response = updateSourcesCache()
  return response
})

const updateSourcesCache = async () => {
  try {
    const filename = 'sources-cache.json'
    const data = await getDatabaseData()
    const NLDServerResponse = await NLDServer('update', filename, data)

    return NLDServerResponse
  } catch (error) {
    return error
  }
}

async function getDatabaseData() {
  try {
    const { data, error } = await supabase
      .from('questions')
      .select(`trait_id, source, category`)
      .order('trait_id', { ascending: true })
    if (error) {
      console.warn('Error fetching data:', error.message)
      throw error
    }
    return data
  } catch (error) {
    throw error
  }
}