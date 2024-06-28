import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('globalStore', () => {
	const global = ref<string>('Oddsofme')

  const selectedAnswers = ref<SelectedAnswer[]>([])

  const skippedQuestions = ref<SkippedQuestion>([])

	return { global, selectedAnswers, skippedQuestions }
})
