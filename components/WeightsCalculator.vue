<script setup lang="ts">
import { Toaster } from '@/components/ui/sonner'
import { toast } from 'vue-sonner'
const colorMode = useColorMode()
const percent = ref<number | undefined>(undefined)
const mathedNum = computed(() => {
	if (!percent.value) return
	const normalize = percent.value / 100
	const inverseProportion = 1 / normalize
	return inverseProportion.toFixed(2)
})
const handleCopy = () => {
	if (!mathedNum.value || mathedNum.value === 'NaN') return
	toast('Copied to clipboard', {
		description: mathedNum.value,
		action: {
			label: 'Ok',
			onClick: () => console.log('Close toast: ', mathedNum.value),
		},
	})
	navigator.clipboard.writeText(mathedNum.value)
}
</script>
<template>
	<div class="text-center" v-auto-animate>
		<h2 class="text-1xl font-bold">Weight Calculator</h2>
		<div class="flex items-center">
			<Input class="m-2 transition-all duration-300" v-model="percent" type="text" placeholder="%" />
			<Button v-if="percent" class="transition-all duration-300" variant="outline"
				@click="percent = undefined">X</Button>
		</div>
		<div class="cursor-pointer rounded-2xl p-2 mt-2 flex items-center justify-between transition-all duration-300"
			:class="colorMode.preference === 'light' ? 'bg-neutral-200' : 'bg-neutral-900'" @click="handleCopy"
			v-if="percent && percent * 0 === 0">
			<span class="text-2xl">{{ mathedNum }}</span>
			<Button>Copy</Button>
		</div>
	</div>
	<Toaster />
</template>

<style scoped></style>