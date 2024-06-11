<template>
  <router-link
		class="relative p-2 border-2 rounded-xl border-slate-800 bg-slate-900 hover:bg-slate-800"
		:class="checkShow() ? '' : 'hidden'"
		:to="to"
	>
		<img class="absolute right-1 top-1 w-9 h-9 p-0.5 rounded-full bg-slate-900" :src="elements[props.resonator.element]?.icon" alt="">
		<div class="flex flex-col inset-0">
			<img :src="resonator.icon" :alt="$t('resonators.list.icon_alt', { resonator: $t(`${resonator.name}`)})" class="w-32 h-32 rounded-b-[calc(8rem/2)]">
			<p class="text-lg text-center font-semibold">{{ $t(resonator.name) }}</p>
		</div>
	</router-link>
</template>

<script setup lang="ts">
import elements from '../../../assets/elements.json';
type Elements = typeof elements;
import weapons from '../../../assets/weapons.json';
type Weapons = typeof weapons;

type statsType = {
	"hp": number;
	"atk": number;
	"def": number;
};

const props = defineProps<{
	resonator: {
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
	};
	filters: {
		elements: Array<keyof Elements>;
		weapons: Array<keyof Weapons>;
	};
	to: string;
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
