import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Folder from '@/components/Folder'
import Task from '@/components/Task'
import Doc2 from '@/components/Doc2'
import History from '@/components/History'
import Shared from '@/components/Shared'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: {
			title: 'Главная'
		}
	},
	{
		path: '/task',
		name: 'task',
		component: Task,
		meta: {
			title: 'Задания'
		}
	},
	{
		path: '/docs/1',
		name: 'doc-shared',
		component: Shared,
		meta: {
			title: 'Документ'
		}
	},
	{
		path: '/doc2',
		name: 'doc2',
		component: Doc2,
		meta: {
			title: 'Документы'
		}
	},
	{
		path: '/folder',
		name: 'folder',
		component: Folder,
		meta: {
			title: 'Поиск'
		}

	},
	{
		path: '/history',
		name: 'history',
		component: History,
		meta: {
			title: 'История'
		}
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "" */ '../views/About.vue')
	}
]

const router = new VueRouter({
	routes
})

export default router
