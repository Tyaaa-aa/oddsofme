import { supabase } from '../supabase'
export default defineEventHandler(async (event) => {
  try {
    const { data, error } = await supabase
      .from('questions')
      .select(`
        trait_id,
        question,
        description,
        category,
        weight,
        source,
        onboarding,
        answers (
          ans_id,
          answer_text,
          percentage
        )
      `)

    if (error) {
      console.error('Error fetching questions and answers:', error)
    } else {
      return data as Question[]
    }
  } catch (err) {
    console.error('Error fetching questions and answers:', err)
  }
})
