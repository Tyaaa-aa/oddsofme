import { supabase } from '../supabase'
export default defineEventHandler(async (event) => {
  // const { onboarding: onboarding } = await readBody(event)
  // if (onboarding === undefined) console.warn('Onboarding Boolean Not Provided', onboarding)
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
      .eq('onboarding', false)
      .eq('done', true)
      .order('percentage', { referencedTable: 'answers', ascending: false })
      .order('trait_id', { ascending: true }) as { data: Question[], error: any }
    if (error) {
      console.error('Error fetching questions and answers:', error)
      throw error
    } else {
      return data as Question[]
    }
  } catch (err) {
    console.error('Error fetching questions and answers:', err)
    throw err
  }
})
