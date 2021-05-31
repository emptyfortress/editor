import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		drawer: false,
		mini: false,
		user: 0,
	},
	getters: {
		drawer: state => { return state.drawer },
		mini: state => { return state.mini },
		user: state => { return state.user },
	},
	mutations: {
		toggleDrawer (state) { state.drawer = !state.drawer },
		setMini (state, payload) { state.mini = payload },
		setUser (state, payload) { state.user = payload },
	},
	actions: {
	},
	modules: {
	}
})
