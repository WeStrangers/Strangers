<template>
  <div
		class="fixed inset-0 flex flex-col items-center bg-slate-950"
	>
		<div class="flex flex-row-reverse w-full px-1">
			<router-link to="/resonators">
				<span class="icon-fill p-1">close</span>
			</router-link>
		</div>
		<div class="relative w-full h-full" v-if="resonator">
			<img
				class="absolute -right-2 top-0 max-h-[90vh]"
				:src="resonator.portrait"
				alt=""
			>
			<div class="flex flex-col justify-center items-center w-full md:w-8/12 space-y-2 p-2 font-semibold">
				<div class="flex items-center">
					<img
						class="p-2"
						:src="resonator.icon"
						:alt="$t('resonators.list.icon_alt', { resonator: $t(resonator.name) })"
					>

					<div class="flex flex-col rounded-xl z-10 space-y-1 p-2 bg-slate-900">
						<div class="flex justify-between items-end space-x-2">
							<p class="text-4xl">{{ $t(resonator.name) }}</p>
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
					</div>
				</div>

				<div class="flex flex-col space-y-1">
					<h3 class="text-xl">Introduction</h3>
					<div class="rounded z-10 p-2 shadow bg-slate-900">
						<p class="w-fit">{{ $t(resonator.description) }}</p>
					</div>
				</div>
			</div>
		</div>

		
	</div>
</template>

<script setup lang="ts">
import router from '../../../router';

import elements from '../../../assets/elements.json';
import weapons from '../../../assets/weapons.json';

import resonators from '../../../assets/resonators.json';
type IResonators = typeof resonators.aalto & {
	element: keyof typeof elements;
	weapon: keyof typeof weapons;
};

// @ts-ignore
const resonatorsKey: keyof typeof resonators = router.currentRoute.value.params.resonator;
// @ts-ignore
const resonator: IResonators = resonators[resonatorsKey];

// @ts-ignore
let element = resonator ? { name: resonator.element, ...elements[resonator.element] } : null;
</script>

<style scoped>

</style>
