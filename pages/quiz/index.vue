<script lang="ts" setup>
import { Toaster } from '@/components/ui/sonner'
import { toast } from 'vue-sonner'
const { data: questions, pending, error, refresh } = useLazyFetch<Question[]>("/api/questions-onboarding-cache", {
  immediate: true,
  method: "GET",
})
// console.log(questions.value)


const store = useGlobalStore()
const submit = async () => {
  console.log(store.selectedAnswers.length);

  // Remove skipped questions from selected answers
  const MIN_ANSWERS = 10
  if (store.selectedAnswers.length < MIN_ANSWERS) {
    toast('Warning!', {
      description: `You need to answer at least ${MIN_ANSWERS} questions to get a score. You have only answered ${store.selectedAnswers.length}.`,
      action: {
        label: 'Ok',
        onClick: () => console.log('Submit '),
      },
      duration: 5000,
    })
    return
  }

  store.selectedAnswers = store.selectedAnswers
    .filter((selected) => !store.skippedQuestions
      .includes(selected.questionId))

  console.log(store.selectedAnswers)
  console.log(store.skippedQuestions)




  // const response = await fetch('/api/submit-answers', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(selectedAnswers.value),
  // })

  // if (response.ok) {
  //   const data = await response.json()
  //   console.log(data)
  // } else {
  //   console.error('Failed to submit answers')
  // }
}

const canGoNext = computed(() => {
  return store.selectedAnswers.length + store.skippedQuestions.length >= 10
})

</script>

<template>
  <div class="relative container mx-auto grid place-items-center">
    <div class="w-full h-10 sticky top-0 bg-gradient-to-b from-background transition-all duration-200 ease-in-out">
    </div>
    <div class="max-w-3xl grid place-items-center max-h-[calc(75dvh-2.5rem)] pr-2 overflow-hidden" v-if="pending"
      v-auto-animate>
      <QuizItemSkeleton v-for="index in 3" :key="index" />
    </div>
    <div v-if="error">Error: {{ error }}</div>
    <div v-else class="flex flex-col pb-5">
      <div class="mb-10 max-w-3xl grid place-items-center" v-for="question, index in questions"
        :key="question.trait_id">
        <QuizItem :question />
      </div>
      <Button v-if="canGoNext" class="fixed right-9 bottom-5 shadow-lg animate-fadein-bounce">Next</Button>
    </div>
    <Toaster />
    <DevOnly>
      <ClientOnly>
        <div class="fixed left-9 bottom-96 z-50 flex flex-col gap-2">
          <Button @click="refresh" variant="outline">REFRESH</Button>
          <Button @click="submit" variant="outline">SUBMIT</Button>
        </div>
      </ClientOnly>
    </DevOnly>
  </div>
</template>
