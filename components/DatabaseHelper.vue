<script setup lang="ts">
const question = ref<string | undefined>('')
const answer = ref('')
</script>
<template>
	<div class="text-center" v-auto-animate>
		<h2 class="text-1xl font-bold">Oddsofme DB Helper</h2>
		<div class="flex items-center" v-auto-animate>
			<Input class="m-2 transition-all duration-300" v-model="question" type="text" placeholder="Question" />
			<Button v-if="question" class="transition-all duration-300" variant="outline"
				@click="question = undefined">X</Button>
		</div>
		<div v-if="question" v-auto-animate class="background2">

			{{ question }}
			{{ answer }}
		</div>
	</div>
</template>