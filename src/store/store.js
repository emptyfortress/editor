import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		drawer: true,
		mini: false,
		user: 0,
		editMode: false,
	},
	getters: {
		drawer: state => { return state.drawer },
		mini: state => { return state.mini },
		user: state => { return state.user },
		editMode: state => { return state.editMode },
	},
	mutations: {
		toggleDrawer (state) { state.drawer = !state.drawer },
		setMini (state, payload) { state.mini = payload },
		setUser (state, payload) { state.user = payload },
		setEditMode (state, payload) { state.editMode = payload },
		toggleEditMode (state) { state.editMode = !state.editMode },
	},
	actions: {
	},
	modules: {
	}
})
