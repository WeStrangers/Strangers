<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
		<Card>
			<h1 class="text-xl">{{ $t('main.home.welcome.title') }}</h1>
			<hr class="w-full border-slate-800">
			<p>{{ $t('main.home.welcome.description.0') }}</p>
			<p>{{ $t('main.home.welcome.description.1') }}</p>
		</Card>

		<Card>
			<h1 class="text-xl">{{ $t('main.home.characters.title') }}</h1>
			<hr class="w-full border-slate-800">
			<p>{{ $t('main.home.characters.description.0') }}</p>
			<p>{{ $t('main.home.characters.description.1') }}</p>
			<router-link to="/characters"><Button>{{ $t('main.home.characters.button') }}</Button></router-link>
		</Card>
	</div>
</template>

<script setup lang="ts">
import Card from '../components/main/Card.vue';
import Button from '../components/main/Button.vue';
</script>

<style scoped>

</style>
