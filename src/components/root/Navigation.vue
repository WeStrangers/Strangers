<template>
	<div class="fixed h-screen flex flex-col p-2 space-y-2 dark:bg-slate-900">
		<div class="flex w-full h-20 items-center justify-center">
			<img src="" :alt="$t('header.logo.alt')">
		</div>

		<div class="flex flex-col justify-between h-full">
			<nav class="flex flex-col *:*:w-full *:*:h-full *:*:text-left *:rounded-xl space-y-2">
				<router-link to="/"><Button class="">{{ $t('navigation.pages.home') }}</Button></router-link>
				<router-link to="/characters"><Button>{{ $t('navigation.pages.characters') }}</Button></router-link>

				<router-link to="/echoes"><Button>{{ $t('navigation.pages.echoes') }}</Button></router-link>
				<router-link to="/weapons"><Button>{{ $t('navigation.pages.weapons') }}</Button></router-link>
				<router-link to="/items"><Button>{{ $t('navigation.pages.items') }}</Button></router-link>

				<router-link to="/settings"><Button>{{ $t('navigation.pages.settings') }}</Button></router-link>
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
  background-color: rgb(30 41 59);
}
</style>
