<template>
	<!-- @vue-skip -->
  <router-link
		class="relative p-2 border-2 rounded-xl border-slate-800 bg-slate-900 hover:bg-slate-800"
		:class="checkShow() ? '' : 'hidden'"
		@click="select = resonator"
	>
		<img class="absolute right-1 top-1 w-9 h-9 p-0.5 rounded-full bg-slate-900" :src="elements[props.resonator.element]?.icon" alt="">
		<div class="flex flex-col inset-0">
			<img :src="resonator.icon" :alt="$t('resonators.list.icon_alt', { resonator: $t(`${resonator.name}`)})" class="w-32 h-32 rounded-b-[calc(8rem/2)]">
			<p class="text-lg text-center font-semibold">{{ $t(resonator.name) }}</p>
		</div>
	</router-link>
</template>

<script setup lang="ts">
import { inject, Ref, ref } from 'vue';

import elements from '../../../assets/elements.json';
type Elements = typeof elements;
import weapons from '../../../assets/weapons.json';
type Weapons = typeof weapons;

const select: Ref<{
	name: string,
	description: string,
	icon: string,
	portrait: string,
	rarity: number
	element: keyof Elements,
	weapon: keyof Weapons,
	show: boolean
} | null> = ref(inject('resonator') || null);

const props = defineProps<{
	resonator: {
		name: string,
		description: string,
		icon: string,
		portrait: string,
		rarity: number
		element: keyof Elements,
		weapon: keyof Weapons,
		show: boolean
	},
	filters: {
		elements: Array<keyof Elements>,
		weapons: Array<keyof Weapons>
	}
}>();

function checkShow() {
	const { resonator, filters: {elements, weapons} } = props;
	return (
		resonator.show === true &&
		(elements.includes(resonator.element) || elements.length === 0) &&
		(weapons.includes(resonator.weapon) || weapons.length === 0)
	);
};
</script>

<style scoped>

</style>
