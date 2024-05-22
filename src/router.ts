import { createRouter, createWebHistory } from 'vue-router'

import HomeView from './views/Home.vue'

import ResonatorsView from './views/Resonators.vue'
import ResonatorView from './components/main/resonators/Resonator.vue';

import SettingsView from './views/Settings.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView
	},
	{
		path: '/resonators',
		name: 'resonators',
		component: ResonatorsView,
		children: [
			{
				path: ':resonator',
				name: 'sidebar',
				component: ResonatorView
			}
		]
	},
	{
		path: '/settings',
		name: 'about',
		component: SettingsView
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router;