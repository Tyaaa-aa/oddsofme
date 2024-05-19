<script setup lang="ts">
const { data: ENVIRONMENT, error } = useFetch("/api/environment")
</script>

<template>
	<Maintenance v-if="ENVIRONMENT === 'production' || error" />
	<main v-else>
		Developing
	</main>
</template>