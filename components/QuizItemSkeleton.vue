<template>
  <Skeleton class="md:w-[200px] w-[70%] h-6 rounded-sm mb-8" />
  <Skeleton class="md:w-[400px] w-[90%] h-4 rounded-sm mb-2" />
  <div class="flex flex-wrap gap-2 justify-center w-fit">
    <div class="p-2 flex flex-col items-center rounded-md transition-all duration-200" v-for="index in 3" :key="index">
      <div class="flex gap-2 mb-5">
        <Skeleton class="w-32 h-32 rounded-md"/>
      </div>
      <span class="flex flex-col items-center">
        <Skeleton class="w-20 h-4 rounded-sm mb-5" />
      </span>
    </div>
  </div>
  <Skeleton class="w-16 h-4 rounded-sm mb-10" />
</template>

<script lang="ts" setup>
import { Skeleton } from '@/components/ui/skeleton'
</script>
