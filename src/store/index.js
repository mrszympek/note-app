import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import {mutations} from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

const state = {
	notes: [],
	category: null,
}

const getters = {
	sortByCategory() {
		return state.notes.filter(notes => notes.category === state.category)
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters,
	plugins: [createPersistedState()]
})