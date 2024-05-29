<template>
  <div class="md:px-8 px-0 container" v-auto-animate>
    <h1 class="text-5xl font-bold text-left my-5">Sources</h1>
    <Alert variant="destructive" class="md:max-w-[50%] max-w-[100%] mb-5" v-if="error">
      <AlertCircle class="w-4 h-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Something went wrong try again later
      </AlertDescription>
    </Alert>
    <Button v-if="error" @click="refresh" v-auto-animate>
      Refresh
      <Loader2 class="w-4 h-4 ml-2 animate-spin" v-if="pending" />
    </Button>
    <ol class="flex flex-col py-5 text-xs overflow-x-auto" v-auto-animate>
      <li class="flex flex-col whitespace-nowrap" v-auto-animate>
        <a v-for="source, index in sources" :key="source.trait_id" :href="encodeURI(source.source)" target="_blank"
          class="p-2 rounded-sm transition-all duration-150 hover:bg-popover">
          {{ index + 1 }}. {{ source.source }}
        </a>
      </li>
    </ol>
  </div>
</template>

<script lang="ts" setup>
import { AlertCircle, Loader2 } from 'lucide-vue-next'
const { data: sources, pending, error, refresh } = await useFetch<Sources[]>("/api/sources-cache")
sources.value = sources.value?.filter((source: any) => source.source !== null) ?? []
sources.value = sources.value?.filter((source: any) => source.source.substring(0, 4) === 'http')
</script>