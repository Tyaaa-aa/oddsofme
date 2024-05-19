<script setup lang="ts">
import { useGlobalStore } from "@/stores/global"
useHead({
  title: "Oddsofme",
  meta: [
    {
      name: "Oddsofme | Find the odds of you",
      content:
        "See how unique you are by finding the odds of you. Compare yourself with others and see how you stand out. Share your results with your friends and family.",
    },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
  bodyAttrs: {
    class: 'transition-background duration-200 ease-in-out'
  }
})

// const store = useGlobalStore()
// watch(store, (state) => {
// 	localStorage.setItem('global', JSON.stringify(state))
// })
</script>
<template>
  <NuxtLoadingIndicator color="#FFA42E" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>