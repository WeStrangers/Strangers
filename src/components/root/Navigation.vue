<template>
	<div class="fixed h-screen flex flex-col p-2 space-y-2 dark:bg-slate-900">
		<div class="flex w-full h-20 items-center justify-center">
			<img src="" :alt="$t('header.logo.alt')">
		</div>

		<div class="flex flex-col justify-between h-full">
			<nav class="flex flex-col space-y-2">
				<router-link class="rounded-xl" to="/"><Button class="w-full h-full text-left">{{ $t('navigation.pages.home') }}</Button></router-link>
				<router-link class="rounded-xl" to="/characters"><Button class="w-full h-full text-left">{{ $t('navigation.pages.characters') }}</Button></router-link>
				<router-link class="rounded-xl" to="/settings"><Button class="w-full h-full text-left">{{ $t('navigation.pages.settings') }}</Button></router-link>
			</nav>
	
			<Locale />
		</div>
	</div>
</template>

<script setup lang="ts">
import Locale from './Locale.vue';
import Button from '../navigation/Button.vue';
</script>

<style scoped>
a.router-link-active {
	--tw-bg-opacity: 1;
  background-color: rgb(30 41 59 / var(--tw-bg-opacity));
}
</style>
