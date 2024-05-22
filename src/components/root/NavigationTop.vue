<template>
	<div class="fixed w-full flex flex-col md:hidden p-2 space-y-2 bg-slate-900">
		
		<div class="flex *:flex justify-between items-center w-full h-8">
			<div class="items-center justify-center w-auto h-8">
				<img src="" :alt="$t('header.logo.alt')">
			</div>
			
			<button @click="switchMenu" class="justify-center items-center w-8 h-8">
				<span class="icon-fill">menu</span>
			</button>
		</div>
		
		<div v-if="menuStatus" class="flex flex-col justify-between space-y-2">	
			<nav class="flex flex-col *:*:w-full *:*:h-full *:*:text-left *:rounded-xl space-y-2">
				<router-link @click="switchMenu" to="/">
					<Button>{{ $t('navigation.pages.home') }}</Button>
				</router-link>
				<router-link @click="switchMenu" to="/resonators">
					<Button>{{ $t('navigation.pages.resonators') }}</Button>
				</router-link>
				
				<!-- <router-link @click="switchMenu" to="/echoes">
					<Button>{{ $t('navigation.pages.echoes') }}</Button>
				</router-link> -->
				<!-- <router-link @click="switchMenu" to="/weapons">
					<Button>{{ $t('navigation.pages.weapons') }}</Button>
				</router-link> -->
				<!-- <router-link @click="switchMenu" to="/items">
					<Button>{{ $t('navigation.pages.items') }}</Button>
				</router-link> -->

				<router-link @click="switchMenu" to="/settings">
					<Button>{{ $t('navigation.pages.settings') }}</Button>
				</router-link>
			</nav>
	
			<Locale />
		</div>
	</div>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';

import Locale from './Locale.vue';
import Button from '../navigation/Button.vue';

const menuStatus: Ref<boolean> = ref(false);
function switchMenu() { menuStatus.value = !menuStatus.value };
</script>

<style scoped>
a.router-link-active {
  background-color: rgb(30 41 59);
}
</style>
