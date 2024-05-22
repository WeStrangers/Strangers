<template>
	<div class="flex flex-col md:flex-row space-x-4">
		<div>
			<p>{{ $t('resonators.elements.title') }}</p>
			<div class="*:w-8 *:h-8 *:m-1">
				<button
					v-for="(attribute, index) in elements" :key="index"
					@click="switchFilterResonators(index)"
					class="rounded-full"
					:class="
						`${checkFilterResonators(index) ? '' : 'grayscale'} ` +
						`${attribute.i18n ? '' : 'hidden'}`
					"
				>
					<img :src="attribute.icon" :alt="$t(attribute.i18n || '')">
				</button>
			</div>
		</div>
		<div>
			<p>{{ $t('resonators.weapons.title') }}</p>
			<div class="*:w-8 *:h-8 *:m-1">
				<button
					v-for="(weapon, index) in weapons" :key="index"
					@click="switchFilterWeapons(index)"
					class="rounded-full p-0.5"
					:class="
						`${checkFilterWeapons(index) ? 'bg-slate-800' : ''} ` +
						`${weapon.i18n ? '' : 'hidden'}`
					"
				>
					<img :src="weapon.icon" :alt="$t(weapon.i18n || '')">
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { inject, ref, Ref } from 'vue';

import elements from '../../../assets/elements.json';
import weapons from '../../../assets/weapons.json';

const filters: Ref<{
	elements: string[],
	weapons: string[]
}> = ref(inject('filters') || {
	elements: [],
	weapons: []
});

function checkFilterResonators(id: string): boolean {
	return filters.value.elements.includes(id) || filters.value.elements.length === 0;
};

function switchFilterResonators(id: string): void {
	if (filters.value.elements.includes(id)) {
		filters.value.elements = filters.value.elements.filter((el: string) => { return el !== id });
	} else {
		filters.value.elements = filters.value.elements.concat([id]);
	};
};

function checkFilterWeapons(id: string): boolean {
	return filters.value.weapons.includes(id) || filters.value.weapons.length === 0;
};

function switchFilterWeapons(id: string): void {
	if (filters.value.weapons.includes(id)) {
		filters.value.weapons = filters.value.weapons.filter((el: string) => { return el !== id });
	} else {
		filters.value.weapons = filters.value.weapons.concat([id]);
	};
};

</script>

<style scoped>

</style>
