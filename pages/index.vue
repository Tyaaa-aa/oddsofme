<script setup lang="ts">
const { data: ENVIRONMENT, error } = useFetch("/api/environment")
</script>

<template>
  <Header />
  <main class="container mx-auto px-4">
    Developing
  </main>
</template>
<style scoped>
main {
  margin-top: 25dvh;
}
</style>