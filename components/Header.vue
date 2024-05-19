<script lang="ts" setup>
</script>
<template>
  <header class="absolute w-full h-[25dvh] left-1/2 transform -translate-x-1/2 top-0 overflow-hidden">
    <MapSvg />
    <div class="container mx-auto px-4 flex items-center justify-between">
      <LogoSvg />
      <div class="flex items-center gap-4">
        <NuxtLink to="/info">Learn More</NuxtLink>
        <DarkLightButton />
      </div>
    </div>
  </header>
</template>
<style scoped>
header {
  background: linear-gradient(0.4deg, rgba(255, 255, 255, 0) 4%, rgba(255, 164, 46, 0.51) 54.17%, rgba(252, 145, 7, 0.96) 99.81%);
}
</style>