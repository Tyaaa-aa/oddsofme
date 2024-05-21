<script lang="ts" setup>
import oombgImg from '@/public/images/oombg.svg'
const handleStart = async () => await navigateTo('/quiz')
</script>
<template>
  <div class="grid place-items-center h-[50dvh]">
    <div class="grid place-items-center">
      <PopulationCounter />
      <h1 class="text-5xl font-bold text-center mt-5">Find out the odds of you</h1>
      <Button @click="handleStart" class="mt-5">Start</Button>
      <ClientOnly>
        <Teleport to="body">
          <img :src="oombgImg" class="fixed top-0 left-0 w-full h-full opacity-5 z-[-1] origin-center object-cover"
            alt="Background Image">
        </Teleport>
      </ClientOnly>
    </div>
  </div>
</template>
<style scoped>
img {
  animation: fadeIn 200ms;
  scale: 0.7;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    scale: 0.6;
  }

  to {
    opacity: 5%;
    scale: 0.7;
  }
}
</style>