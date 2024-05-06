import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('globalStore', () => {
	const global = ref<string>('Oddsofme')

	return { global }
})
