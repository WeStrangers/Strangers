<template>
  <div class="grid grid-cols-3 gap-4">
		<Card>
			<h1 class="text-xl">{{ $t('main.home.welcome.title') }}</h1>
			<hr class="w-full border-slate-800">
			<p>{{ $t('main.home.welcome.description') }}</p>
		</Card>

		<Card>
			<h1 class="text-xl">{{ $t('main.home.characters.title') }}</h1>
			<hr class="w-full border-slate-800">
			<p>{{ $t('main.home.characters.description1') }}</p>
			<p>{{ $t('main.home.characters.description2') }}</p>
			<router-link to="/characters"><Button>Characters</Button></router-link>
		</Card>
	</div>
</template>

<script setup lang="ts">
import Card from '../components/main/home/Card.vue';
import Button from '../components/main/home/Button.vue';
</script>

<style scoped>

</style>
