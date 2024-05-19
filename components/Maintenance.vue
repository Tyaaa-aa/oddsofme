<script setup lang="ts">
import { useGlobalStore } from "@/stores/global"
const store = useGlobalStore()
</script>
<template>
  <main class="w-screen h-screen grid place-items-center p-10">
    <div class="text-center">
      <LogoSvg class="w-32 h-32 mx-auto" />

      <h2 class="text-2xl">{{ store.global }} | Coming Soon</h2>
      <DarkLightButton />
      <PopulationCounter />
    </div>
  </main>
</template>