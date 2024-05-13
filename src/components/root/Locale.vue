<template>
  <div id="locales" class="flex flex-col rounded-xl bg-slate-800">
		<Button class="hide" @click="changeLocale('ru')">🇷🇺 Русский</Button>
		<Button class="hide" @click="changeLocale('en')">🇬🇧 English</Button>
		<Button>Languages</Button>
	</div>
</template>

<script setup lang="ts">
import { changeLocale } from '../../i18n';

import Button from '../navigation/Button.vue';
</script>

<style scoped>
div#locales > .hide {
	display: none;
}

div#locales:hover > .hide {
	display: unset;
}
</style>
