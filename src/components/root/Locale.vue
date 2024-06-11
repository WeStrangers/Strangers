<template>
  <div id="locales" class="flex flex-col md:flex-col-reverse group rounded-xl *:text-center bg-slate-800">
		<Button>Languages</Button>
		<Button class="hidden group-hover:block" @click="changeLocale('en')">🇬🇧 English</Button>
		<Button class="hidden group-hover:block" @click="changeLocale('ru')">🇷🇺 Русский</Button>
	</div>
</template>

<script setup lang="ts">
import { changeLocale } from '../../i18n';

import Button from '../navigation/Button.vue';
</script>

<style scoped>

</style>
