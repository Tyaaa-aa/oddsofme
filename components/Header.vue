<script lang="ts" setup>
</script>
<template>
  <header class="w-full h-[15dvh] md:h-[25dvh] overflow-hidden">
    <div id="map" class="container mx-auto">
      <MapSvg />
    </div>
    <div class="container mx-auto px-4 md:px-4 flex items-center justify-between z-10 relative">
      <LogoSvg />
      <div class="flex items-center gap-4">
        <NuxtLink to="/info"
          class="hover:border-b-foreground border-b-2 border-b-transparent transition-color duration-200 p-0.5">
          Learn More
        </NuxtLink>
        <DarkLightButton />
      </div>
    </div>
  </header>
</template>
<style scoped>
header {
  background: linear-gradient(0.4deg, rgba(255, 255, 255, 0) 4%, rgba(255, 164, 46, 0.51) 54.17%, rgba(252, 145, 7, 0.96) 99.81%);
  backdrop-filter: blur(8px);
  mask: linear-gradient(rgb(0, 0, 0, 100%), rgb(0, 0, 0, 100%), rgb(0 0 0 / 86%), rgb(0 0 0 / 0%));
}

#map {
  position: absolute;
  top: 0;
  left: 50%;
  translate: -50% 0;
  height: 25dvh;
  overflow: hidden;
}
</style>