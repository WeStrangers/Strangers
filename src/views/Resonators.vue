<template>
  <div class="relative flex flex-col justify-start items-center *:p-2">
		<Filter />
		<h2>{{ $t('') }}</h2>
		<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
			<!-- @vue-skip -->
			<Card v-for="(resonator, index) in resonators" :key="index" :resonator="resonator" :filters="filters" :to="`/resonators/${index}`" />
		</div>
		<router-view class="absolute" v-slot="{ Component }">
			<transition mode="out-in">
				<component class="p-4" :is="Component" />
			</transition>
		</router-view>
		<!-- <Sidebar /> -->
	</div>
</template>

<script setup lang="ts">
import { provide, ref, Ref } from 'vue';

import elements from '../assets/elements.json';
type Elements = typeof elements;
import weapons from '../assets/weapons.json';
type Weapons = typeof weapons;
import resonators from '../assets/resonators.json';
resonators;

import Filter from '../components/main/resonators/Filter.vue';
import Card from '../components/main/resonators/Card.vue';
// import Sidebar from '../components/main/resonators/Sidebar.vue';

const filters: Ref<{
	elements: Array<keyof Elements>,
	weapons: Array<keyof Weapons>
}> = ref({
	elements: [],
	weapons: []
});
provide('filters', filters);

const resonator: Ref<{
	name: string,
	description: string,
	icon: string,
	portrait: string,
	rarity: number
	element: keyof Elements,
	weapon: keyof Weapons,
	show: boolean
} | null> = ref(null);
provide('resonator', resonator);
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.25s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
