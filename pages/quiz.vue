<script lang="ts" setup>
const { data: questions, pending, error } = useFetch("/api/questions")
</script>

<template>
  <div class="grid place-items-center overflow-auto">
    <h1 class="text-5xl font-bold text-left mt-5">Quiz</h1>
    <div v-if="pending">Loading...</div>
    <div v-if="error">Error: {{ error }}</div>
    <div v-for="question in questions" :key="question.trait_id">
      <div>{{ question.question }}</div>
      <div v-for="answer in question.answers" :key="answer.ans_id">
        {{ answer.answer_text }}
      </div>
    </div>
  </div>
</template>
