<template>
<<<<<<< HEAD
  <div class="w-screen min-h-screen text-white bg-slate-950">
		<NavigationTop class="z-50" />
		<NavigationLeft class="w-48" />
		<div class="ps-0 pt-12 md:ps-48 md:pt-0">
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
=======
  <div class="w-screen min-h-screen flex dark:text-white dark:bg-slate-950">
		<h1 class="text-4xl m-auto">Coming Soon</h1>
>>>>>>> product
	</div>
</template>

<script setup lang="ts">
<<<<<<< HEAD

import NavigationTop from './components/root/NavigationTop.vue';
import NavigationLeft from './components/root/NavigationLeft.vue';
import Footer from './components/root/Footer.vue';
=======
>>>>>>> product

</script>

<style scoped>

</style>
