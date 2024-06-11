<template>
	<div class="columns-1 lg:columns-2 xl:columns-3 p-4">
		<Card>
			<h1 class="text-xl">{{ $t('main.home.welcome.title') }}</h1>
			<hr class="w-full border-slate-800">
			<p v-for="(el, index) in $tm('main.home.welcome.description')" :key="index">{{ el }}</p>
		</Card>

		<Card>
			<h1 class="text-xl">{{ $t('main.home.resonators.title') }}</h1>
			<hr class="w-full border-slate-800">
			<p v-for="(el, index) in $tm('main.home.resonators.description')" :key="index">{{ el }}</p>
			<router-link to="/resonators"><Button>{{ $t('main.home.resonators.button') }}</Button></router-link>
		</Card>
		
		<Card>
			<h1 class="text-xl">{{ $t('main.home.info.title') }}</h1>
			<hr class="w-full border-slate-800">
			<p v-for="(el, index) in $tm('main.home.info.description')" :key="index">{{ el }}</p>
		</Card>
	</div>
</template>

<script setup lang="ts">
import Card from '../components/main/home/Card.vue';
import Button from '../components/main/home/Button.vue';
</script>

<style scoped>

</style>
