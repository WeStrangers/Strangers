<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
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
		
		<!-- @vue-skip -->
		<Card v-if="timerEnd - timer > 0">
			<h1 class="text-xl">{{ $t('main.home.timer.title') }}</h1>
			<hr class="w-full border-slate-800">
			<p class="text-xl self-center">{{ $t('main.home.timer.description') }}</p>
			<p class="text-6xl self-center">{{ getTimer() }}</p>
		</Card>
		
		<Card>
			<h1 class="text-xl">{{ $t('main.home.info.title') }}</h1>
			<hr class="w-full border-slate-800">
			<p v-for="(el, index) in $tm('main.home.info.description')" :key="index">{{ el }}</p>
		</Card>
	</div>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';

import Card from '../components/main/home/Card.vue';
import Button from '../components/main/home/Button.vue';

const timer: Ref<Date> = ref(new Date());
const timerEnd = new Date(2024, 5, 23, 5);

setInterval(() => {
	timer.value = new Date();
}, 1000)

function getTimer(): string {
	let hours = `${25 - timer.value.getUTCHours()}`;
	let minutes = 60 - timer.value.getUTCMinutes() < 10 ? `0${60 - timer.value.getUTCMinutes()}` : `${60 - timer.value.getUTCMinutes()}`;
	let seconds = 60 - timer.value.getUTCSeconds() < 10 ? `0${60 - timer.value.getUTCSeconds()}` : `${60 - timer.value.getUTCSeconds()}`;
	return `${hours}:${minutes}:${seconds}`;
};
</script>

<style scoped>

</style>
