import { supabase } from '../supabase'

interface Sources {
  trait_id: number,
  source: string,
  category: string
}

export default defineEventHandler(async (event) => {
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
})