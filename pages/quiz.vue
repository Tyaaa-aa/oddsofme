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
  console.log(questions.value?.length);

  if (store.selectedAnswers.length < 10) {
    toast('Warning!', {
      description: 'You need to answer at least 10 questions to get a score.',
      action: {
        label: 'Ok',
        onClick: () => console.log('Submit '),
      },
      duration: 5000,
    })
    return
  }

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


</script>

<template>
  <div class="relative container mx-auto grid place-items-center">
    <div class="w-full h-10 sticky top-0 bg-gradient-to-b from-background transition-all duration-200 ease-in-out"></div>
    <div class="max-w-3xl grid place-items-center max-h-[calc(75dvh-2.5rem)] pr-2 overflow-hidden" v-if="pending" v-auto-animate>
      <QuizItemSkeleton v-for="index in 3" :key="index" />
    </div>
    <div v-if="error">Error: {{ error }}</div>
    <div v-else>
      <div class="mb-10 max-w-3xl grid place-items-center" v-for="question, index in questions"
        :key="question.trait_id">
        <QuizItem :question />
      </div>
    </div>
    <Toaster />
    <DevOnly>
      <Button class="fixed right-9 bottom-7 z-50" @click="refresh">REFRESH</Button>
      <Button class="fixed right-9 bottom-20 z-50" @click="submit">SUBMIT</Button>
    </DevOnly>
  </div>
</template>
