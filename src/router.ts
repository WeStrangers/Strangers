import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './views/Home.vue'
import CharactersView from './views/Characters.vue'
import SettingsView from './views/Settings.vue'

const routes = [
	{ path: '/', name: 'home', component: HomeView },
	{ path: '/characters', name: 'characters', component: CharactersView },
	{ path: '/settings', name: 'about', component: SettingsView },
]

const router = createRouter({
	history: createMemoryHistory(),
	routes,
})

export default router;