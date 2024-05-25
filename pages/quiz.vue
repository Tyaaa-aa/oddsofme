<script lang="ts" setup>
import { Toaster } from '@/components/ui/sonner'
import { toast } from 'vue-sonner'
const { data: questions, pending, error, refresh } = useLazyFetch<Question[]>("/api/questions", {
  immediate: true,
  method: "POST",
  body: {
    onboarding: true
  }
})
// console.log(questions.value)

interface SelectedAnswers {
  question_id: number
  ans_id: number
}

const selectedAnswers = ref<SelectedAnswers[]>([])

const handleAnswerSelect = (question: Question, ans_id: number) => {
  const selectedAnswer = {
    question_id: question.trait_id,
    ans_id
  }

  // if (selectedAnswers.value.some((answer) => answer.ans_id === ans_id) && selectedAnswers.value.length > 0) return

  selectedAnswers.value.push(selectedAnswer)
  console.log(selectedAnswers.value)
}

const handleSkip = () => {
  toast('Warning!', {
		description: 'Skipping questions may lower your score accuracy. Try to answer as many as you can. At least 10 are required for a score.',
		action: {
			label: 'Ok',
			onClick: () => console.log('Skip '),
		},
	})
}
</script>

<template>
  <div class="container mx-auto grid place-items-center overflow-auto">
    <Button class="fixed right-9 bottom-7 z-50" @click="refresh">REFRESH</Button>
    <div class="max-w-3xl grid place-items-center overflow-y-hidden max-h-[75dvh] pr-2" v-if="pending" v-auto-animate>
      <QuizItemSkeleton v-for="index in 3" :key="index" />
    </div>
    <div v-if="error">Error: {{ error }}</div>
    <div v-else>
      <div class="mb-10 max-w-3xl grid place-items-center" v-for="question, index in questions"
        :key="question.trait_id">
        <QuizItem :question @ans-skip="handleSkip" />
      </div>
    </div>
    <Toaster />
  </div>
</template>
