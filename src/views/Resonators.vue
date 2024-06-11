<template>
  <div class="absolute inset-0">
		<div
			class="flex flex-col justify-start items-center min-h-full *:p-2 p-4 inset-0"
			v-show="$route.fullPath === '/resonators' || $route.fullPath === '/resonators/'"
		>
			<Filter />
			<h2>{{ $t('') }}</h2>
			<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
				<!-- @vue-skip -->
				<Card v-for="(resonator, index) in resonators" :key="index" :resonator="resonator" :filters="filters" :to="`/resonators/${index}`" />
			</div>
		</div>
		<router-view v-slot="{ Component }">
			<transition>
				<component :is="Component" />
			</transition>
		</router-view>
	</div>
</template>

<script setup lang="ts">
import { provide, ref, Ref } from 'vue';

import elements from '../assets/elements.json';
type Elements = typeof elements;
import weapons from '../assets/weapons.json';
type Weapons = typeof weapons;
import resonators from '../assets/resonators.json';

import Filter from '../components/main/resonators/Filter.vue';
import Card from '../components/main/resonators/Card.vue';

const filters: Ref<{
	elements: Array<keyof Elements>,
	weapons: Array<keyof Weapons>
}> = ref({
	elements: [],
	weapons: []
});
provide('filters', filters);

type statsType = {
	"hp": number;
	"atk": number;
	"def": number;
};

const resonator: Ref<{
	name: string;
	description: string;
	icon: string;
	portrait: string;
	rarity: 5 | 4;
	stats: {
		"1": statsType;
		"20": statsType;
		"40": statsType;
		"50": statsType;
		"60": statsType;
		"70": statsType;
		"80": statsType;
		"90": statsType;
	};
	element: keyof Elements;
	weapon: keyof Weapons;
	show: boolean;
} | null> = ref(null);
provide('resonator', resonator);
</script>

<style scoped>

</style>
