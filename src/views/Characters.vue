<template>
  <div>
		<h1>Characters</h1>
		<div>
			<h2>Filters</h2>
			<Filter />
		</div>
		<button class="grid">
			{{ filters }}
		</button>
	</div>
</template>

<script setup lang="ts">
import { provide, ref, Ref } from 'vue';

import Filter from '../components/main/characters/Filter.vue';

const filters: Ref<string[]> = ref([]);
provide('filters', filters);
</script>

<style scoped>

</style>
