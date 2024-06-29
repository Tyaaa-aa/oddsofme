<template>
  <h3 class="text-2xl font-semibold mb-5 flex items-center gap-2">
    {{ question.question }}
    <span class="text-[14px]">({{ question.trait_id }})</span>
  </h3>
  <p class=" mb-2">{{ question.description }}</p>
  <div class="flex flex-wrap gap-2 justify-center w-fit">
    <div v-for="answer in question.answers" :key="answer.ans_id"
      class="cursor-pointer flex flex-col items-center rounded-lg transition-all duration-200 hover:bg-popover" :class="{
        'p-2': !skip,
        'p-0': skip,
        'bg-primary hover:bg-primary': store.selectedAnswers.some((selected) => selected.answerId === answer.ans_id),
      }" role="button" @click="handleAnswerSelect(question, answer.ans_id)">
      <div class="flex gap-2">
        <img v-for="image in answer.image" :key="image" :src="image" :alt="answer.answer_text"
          class="object-cover rounded-md mb-2 transition-all duration-300"
          :class="skip ? 'grayscale w-0 h-0 ' : 'w-32 h-32'" />
      </div>
      <span class="flex flex-col items-center" v-if="!skip">
        {{ answer.answer_text }}
      </span>
    </div>
  </div>
  <Button :variant="skip ? 'secondary' : 'ghost'" class="mt-5" @click="handleSkip(question.trait_id)">
    {{ skip ? 'Undo Skip' : 'Skip' }}
  </Button>
</template>

<script lang="ts" setup>
import { toast } from 'vue-sonner'
const store = useGlobalStore()
const props = defineProps<{
  question: Question
}>()
const emit = defineEmits(['ansSkip'])

const skip = ref(false)
const handleSkip = (questionID: number) => {
  // Save to store later
  skip.value = !skip.value
  if (skip.value) {
    toast('Warning!', {
      description: 'Skipping questions may lower your score accuracy. Try to answer as many as you can. At least 10 are required for a score.',
      action: {
        label: 'Ok',
        onClick: () => console.log('Skipping anyway'),
      },
      duration: 5000,
    })
  }

  if (store.skippedQuestions.includes(questionID)) {
    console.log('Removing skipped question');
    
    store.skippedQuestions = store.skippedQuestions.filter((skipped) => skipped !== questionID)
    return
  }

  store.skippedQuestions.push(questionID)

}
const handleAnswerSelect = (question: Question, ans_id: number) => {

  if (store.selectedAnswers.some((selected) => selected.answerId === ans_id)) {
    store.selectedAnswers = store.selectedAnswers.filter((selected) => selected.answerId !== ans_id)
    return
  }

  if (store.selectedAnswers.length > 0) {
    const questionIndex = store.selectedAnswers.findIndex((selected) => selected.questionId === question.trait_id)
    if (questionIndex > -1) {
      store.selectedAnswers.splice(questionIndex, 1)
    }
  }

  store.selectedAnswers.push({
    questionId: question.trait_id,
    answerId: ans_id,
  })

  console.log(store.selectedAnswers)
}
</script>

<style></style>