<script lang="ts" setup>
import { Moon, Sun } from "lucide-vue-next"
const colorMode = useColorMode()
const toggleColorMode = () => (colorMode.preference = colorMode.preference === "dark" ? "light" : "dark")
</script>
<template>
  <Button class="m-5" aria-label="Toggle Dark Mode" @click="toggleColorMode" v-auto-animate>
    <ClientOnly>
      <Moon class="w-4 h-4" v-if="colorMode.preference === 'light'" />
      <Sun class="w-4 h-4" v-else />
      <template #fallback>
        <Sun class="w-4 h-4" />
      </template>
    </ClientOnly>
  </Button>
</template>