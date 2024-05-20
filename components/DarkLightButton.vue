<script lang="ts" setup>
import { Moon, Sun } from "lucide-vue-next"
const colorMode = useColorMode()
const toggleColorMode = () => (colorMode.preference = colorMode.preference === "dark" ? "light" : "dark")
</script>
<template>
  <ClientOnly>
    <Button variant="outline" class="w-[50px] h-[50px] animate-fadein hover:bg-foreground bg-transparent"
      aria-label="Toggle Dark Mode" @click="toggleColorMode" v-auto-animate>
      <Moon class="scale-125" v-if="colorMode.preference === 'light'" />
      <Sun class="scale-125" v-else />
      <template #fallback>
        <Sun class="scale-125" />
      </template>
    </Button>
    <template #fallback>
      <Skeleton class="w-[50px] h-[50px] rounded-lg" />
    </template>
  </ClientOnly>
</template>