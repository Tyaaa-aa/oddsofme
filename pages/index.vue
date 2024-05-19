<script setup lang="ts">
const { data: ENVIRONMENT, error } = useFetch("/api/environment")
</script>

<template>
  <Header />
  <main>
    Developing
  </main>
</template>
<style scoped>
main {
  margin-top: 25dvh;
}
</style>