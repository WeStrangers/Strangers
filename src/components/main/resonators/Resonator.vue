<template>
  <div class="flex flex-col items-center min-h-max p-4 bg-slate-950">
		<div class="flex flex-row-reverse w-full px-1 z-10">
			<router-link to="/resonators">
				<span class="icon-fill p-1">close</span>
			</router-link>
		</div>
		<div class="w-full" v-if="resonator">
			<div class="flex flex-col justify-center items-center w-full lg:w-8/12 space-y-2 p-2 font-semibold *:z-10">
				<div class="flex flex-wrap justify-center items-center *:m-1">
					<img
						class="w-48 h-48 rounded-b-[calc(12rem/2)]"
						:src="resonator.icon"
						:alt="$t('resonators.list.icon_alt', { resonator: $t(resonator.name) })"
					>

					<div class="flex flex-col rounded-xl z-10 space-y-1 p-2 bg-slate-900">
						<div class="flex justify-between items-end space-x-2">
							<p
								class="text-4xl"
							>
								{{ $t(resonator.name) }}
							</p>
							<div
								v-if="element && element.i18n"
								class="flex justify-center items-center rounded-full z-10 w-fit h-fit border-2 bg-slate-900"
								:class="`border-[${element.color}]`"
							>
								<img class="w-6 h-6 p-0.5" :src="$t(element.icon)" alt="">
								<p class="pe-2" :class="`text-[${element.color}]`">
									{{ $t(element.i18n) }}
								</p>
							</div>
						</div>

						<p class="w-fit">{{ $t(resonator.subname) }}</p>
						<!-- <div class="text-[#97d3ba] border-[#c15d5d] text-[#c5b065] text-[#67bcdb] text-[#e649a6] text-[#a965c5]" /> -->
						<!-- <div class="border-[#97d3ba] border-[#c15d5d] border-[#c5b065] border-[#67bcdb] border-[#e649a6] border-[#a965c5]" /> -->

						<div>

						</div>
					</div>
				</div>

				<div class="flex flex-col space-y-1">
					<h3 class="text-xl">Introduction</h3>
					<div class="p-2 rounded shadow border-2 border-slate-800 bg-slate-900">
						<p class="w-fit hyphens-auto" :lang="i18n.global.locale">{{ $t(resonator.description) }}</p>
					</div>
				</div>
			
				<div class="flex flex-col w-full space-y-1">
					<h3 class="text-xl">Stats</h3>
					<div class="rounded shadow border-2 p-2 space-y-2 border-slate-800 bg-slate-900">
						<div class="flex justify-center items-center w-full space-x-2">
							<p>Level:</p>
							<select class="flex-1 rounded px-2 py-1 bg-slate-800" v-model="selected">
							  <option v-for="(el, index) in [1, 20, 40, 50, 60, 70, 80, 90]" :key="index">{{ el }}</option>
							</select>
						</div>

						<!-- @vue-skip -->
						<div
							class="flex justify-between rounded px-1 py-0.5 even:bg-slate-800"
							v-for="(el, index) in resonator.stats[Number(selected)]" :key="index"
						>
							<p>{{ $t(`resonators.stats.${index}`) }}</p>
							<p>{{ Math.round(Number(el)) }}</p>
						</div>
					</div>
				</div>
			</div>

			<img
				class="absolute top-0 right-0 max-h-[90vh] opacity-10"
				:src="resonator.portrait"
				alt=""
			>
		</div>
	</div>
</template>

<script setup lang="ts">
import router from '../../../router';
import i18n from '../../../i18n';

import elements from '../../../assets/elements.json';
import weapons from '../../../assets/weapons.json';

import resonators from '../../../assets/resonators.json';
import { ref } from 'vue';

const selected = ref("90");

type statsType = {
	"hp": number;
	"atk": number;
	"def": number;
};

type IResonator = {
	name: string;
	subname: string;
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
	element: keyof typeof elements;
	weapon: keyof typeof weapons;
	show: boolean;
};

// @ts-ignore
const resonatorsKey: keyof typeof resonators = router.currentRoute.value.params.resonator;
// @ts-ignore
const resonator: IResonator = resonators[resonatorsKey];

let element = resonator ? { name: resonator.element, ...elements[resonator.element] } : null;

window.scrollTo(0, 0);
</script>

<style scoped>

</style>
