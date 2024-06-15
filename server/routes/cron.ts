import { supabase } from '../supabase'
import { NLDServer } from '../NLDServer'

export default defineEventHandler(async (event) => {
  const response = updateSourcesCache()
  return response
})

async function updateSourcesCache() {
  try {
    const filename = 'sources-cache.json'
    const data = await getSourcesFromDatabase()
    const NLDServerResponse = await NLDServer('update', filename, data)

    return NLDServerResponse
  } catch (error) {
    return error
  }
}

async function getSourcesFromDatabase() {
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

async function updateOnboardingQuestionsCache() {
  try {
    const filename = 'questions-onboarding-cache.json'
    const data = await getSourcesFromDatabase()
    const NLDServerResponse = await NLDServer('update', filename, data)

    return NLDServerResponse
  } catch (error) {
    return error
  }
}

async function getOnboardingQuestionsFromDatabase() {
  try {
    const { data, error } = await supabase
      .from('questions')
      .select(`
        trait_id,
        question,
        description,
        category,
        source,
        onboarding,
        answers (
          ans_id,
          answer_text,
          image
        )
      `)
      .eq('onboarding', true)
      .eq('done', true)
      .order('percentage', { referencedTable: 'answers', ascending: false })
      .order('trait_id', { ascending: true }) as { data: Question[], error: any }
    if (error) {
      console.warn('Error fetching data:', error.message)
      throw error
    }
    return data
  } catch (error) {
    throw error
  }
}
