import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Folder from '@/components/Folder'
import Task from '@/components/Task'
import Doc from '@/components/Doc'
import Doc1 from '@/components/Doc1'
import Doc2 from '@/components/Doc2'
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
	},
	{
		path: '/doc-shared',
		name: 'doc-shared',
		component: Shared,
		meta: {
			title: 'Документы с общим доступом'
		}
	},
	{
		path: '/doc',
		name: 'doc',
		component: Doc,
		props: {
			maincolor: 'docolor'
		},
	},
	{
		path: '/doc1',
		name: 'doc1',
		component: Doc1,
	},
	{
		path: '/doc2',
		name: 'doc2',
		component: Doc2,
	},
	{
		path: '/folder',
		name: 'folder',
		component: Folder,
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
