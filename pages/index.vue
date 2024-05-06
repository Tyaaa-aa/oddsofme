<script setup lang="ts">
import { Moon } from "lucide-vue-next"
import { Sun } from "lucide-vue-next"
import { useGlobalStore } from "@/stores/global"
const store = useGlobalStore()
const colorMode = useColorMode()
const toggleColorMode = () => (colorMode.preference = colorMode.preference === "dark" ? "light" : "dark")
</script>

<template>
	<main class="w-screen h-screen grid place-items-center p-10">
		<div class="text-center">
			<h2 class="text-2xl">{{ store.global }} | coming soon</h2>
			<Button class="m-5" aria-label="Toggle Dark Mode" @click="toggleColorMode" v-auto-animate>
				<Moon class="w-4 h-4" v-if="$colorMode.preference === 'light'" />
				<Sun class="w-4 h-4" v-else />
			</Button>
			<PopulationCounter />
		</div>
	</main>
</template>