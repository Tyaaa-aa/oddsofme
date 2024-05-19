<script lang="ts" setup>
</script>
<template>
  <header>
    <MapSvg />
  </header>
</template>
<style scoped>
header {
  position: absolute;
  width: 100vw;
  height: 25dvh;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  background: linear-gradient(0.4deg, rgba(255, 255, 255, 0) 4%, rgba(255, 164, 46, 0.51) 54.17%, rgba(252, 145, 7, 0.96) 99.81%);
  backdrop-filter: blur(10px);
  overflow: hidden;
}
</style>