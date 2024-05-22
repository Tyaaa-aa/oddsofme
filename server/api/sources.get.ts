import { supabase } from '../supabase'

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