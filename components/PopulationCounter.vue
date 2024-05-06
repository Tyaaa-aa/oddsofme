<script lang="ts" setup>
import { TrendingUp } from 'lucide-vue-next'
import { TrendingDown } from 'lucide-vue-next'
import { Globe } from 'lucide-vue-next'
const startingNumber = 8107914637
let population = ref(startingNumber)

onMounted(() => {
	setInterval(() => {
		const increment = Math.floor(Math.random() * 5) + 1
		population.value += increment
		if (population.value > startingNumber + 10) {
			population.value -= Math.floor(Math.random() * 20) + 1
		}
	}, 350)
})

const growShrink = ref('text-green-500')
watch(population, (newValue, oldValue) => {
	if (oldValue && newValue > oldValue) {
		growShrink.value = 'text-green-500'
	} else {
		growShrink.value = 'text-red-500'
	}
}, { immediate: true })
</script>

<template>
	<div class="flex flex-col items-center justify-center space-y-2 max-w-full overflow-hidden"
		v-auto-animate="{ duration: 100 }">
		<h1 class="text-3xl font-bold flex items-center">
			<Globe class="w-7 h-7 mr-2" />
			World Population
		</h1>
		<span class="text-5xl font-bold flex items-center" :class="growShrink" v-if="growShrink === 'text-green-500'">
			{{ population.toLocaleString('en-US') }}
			<TrendingUp class="w-10 h-10 ml-2" />
		</span>
		<span class="text-5xl font-bold flex items-center" :class="growShrink" v-else>
			{{ population.toLocaleString('en-US') }}
			<TrendingDown class="w-10 h-10 ml-2" />
		</span>
	</div>
</template>
