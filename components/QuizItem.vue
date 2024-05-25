<template>
  <h3 class="text-2xl font-semibold mb-5 flex items-center gap-2">
    {{ question.question }}
    <span class="text-[14px]">({{ question.trait_id }})</span>
  </h3>
  <p class=" mb-2">{{ question.description }}</p>
  <div class="flex flex-wrap gap-2 justify-center w-fit">
    <div v-for="answer in question.answers" :key="answer.ans_id"
      class="cursor-pointer flex flex-col items-center rounded-md transition-all duration-200 hover:bg-popover" :class="skip ? 'p-0' : 'p-2'"
      role="button" @click="handleAnswerSelect(question, answer.ans_id)">
      <div class="flex gap-2">
        <img v-for="image in answer.image" :key="image" :src="image" :alt="answer.answer_text"
          class="object-cover rounded-md mb-2 transition-all duration-300" :class="skip ? 'grayscale w-0 h-0 ' : 'w-32 h-32'" />
      </div>
      <span class="flex flex-col items-center" v-if="!skip">
        {{ answer.answer_text }}
      </span>
    </div>
  </div>
  <Button :variant="skip ? 'secondary' : 'ghost'" class="mt-5" @click="handleSkip">
  {{ skip ? 'Undo Skip' : 'Skip' }}
  </Button>
</template>

<script lang="ts" setup>
const props = defineProps<{
  question: Question
}>()

const skip = ref(false)
const handleSkip = () => {
  // Save to store later
  skip.value = !skip.value
}
const handleAnswerSelect = (question: Question, ans_id: number) => {
// Save to store later
}
</script>

<style></style>