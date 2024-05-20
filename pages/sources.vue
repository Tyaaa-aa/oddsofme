<template>
  <div class="container">
    <h1 class="text-5xl font-bold text-left mt-5">Sources</h1>
    <ol class="flex flex-col py-5 text-xs">
      <li class="flex flex-col">
        <a v-for="source, index in sources" :key="source.trait_id" :href="encodeURI(source.source)" target="_blank"
          class="p-2 rounded-sm transition-all duration-150 hover:bg-popover">
          {{ index + 1 }}. {{ source.source }}
        </a>
      </li>
    </ol>
  </div>
</template>

<script lang="ts" setup>
const { data: sources, pending, error } = await useFetch("/api/sources")
sources.value = sources.value?.filter((source: any) => source.source !== null)
sources.value = sources.value?.filter((source: any) => source.source.substring(0, 4) === 'http')
console.log(sources.value);
</script>