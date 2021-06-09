import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Folder from '@/components/Folder'
// import Task from '@/components/Task'
// import Doc2 from '@/components/Doc2'
// import History from '@/components/History'
// import Shared from '@/components/Shared'
import Activation from '@/components/Activation'

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
		path: '/activation',
		name: 'activation',
		component: Activation,
	},
]

const router = new VueRouter({
	routes
})

export default router
