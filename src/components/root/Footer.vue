<template>
  <footer class="flex flex-col justify-around h-auto px-4 py-6 text-slate-500 bg-slate-900">
		<div class="flex space-x-2">
			<p>{{ $t('footer.socials.text') }}</p>
			<a href="https://poti.netlify.app" target="_blank">{{ $t('footer.socials.links.developer')}}</a>
		</div>
		<div class="flex flex-col *:text-center">
			<p>{{ $t('footer.rights.0') }} <a href="https://wutheringwaves.com/">Wuthering Waves</a> {{ $t('footer.rights.1') }}</p>
			<p>{{ $t('footer.rights.2') }}</p>
		</div>
	</footer>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
