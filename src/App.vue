<template>
  <div class="w-screen min-h-screen dark:text-white dark:bg-slate-950">
		<Navigation class="w-48" />
		<div class="ms-48">
			<main class="min-h-screen" >
				<router-view v-slot="{ Component }">
					<!-- <KeepAlive> -->
						<transition mode="out-in">
							<component class="p-4" :is="Component" />
						</transition>
					<!-- </KeepAlive> -->
				</router-view>
			</main>
			<Footer />
		</div>
	</div>
</template>

<script setup lang="ts">
import Navigation from './components/root/Navigation.vue';
import Footer from './components/root/Footer.vue';

// Whenever the user explicitly chooses light mode
// localStorage.theme = 'light'

// Whenever the user explicitly chooses dark mode
// localStorage.theme = 'dark'

// Whenever the user explicitly chooses to respect the OS preference
// localStorage.removeItem('theme')
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.25s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
