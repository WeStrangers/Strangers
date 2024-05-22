<template>
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
	</div>
</template>

<script setup lang="ts">
import NavigationTop from './components/root/NavigationTop.vue';
import NavigationLeft from './components/root/NavigationLeft.vue';
import Footer from './components/root/Footer.vue';
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
