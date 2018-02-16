import * as types from './mutations-types'

export const mutations = {
	[types.ADD_NOTE](state, payload) {
		state.notes.push(payload);
	},

	[types.REMOVE_NOTE](state, payload) {
		state.notes = state.notes.filter(note => note !== payload);
	},

	[types.SET_CATEGORY] (state, payload) {
		console.log(payload)
		if(payload) {
			state.category = payload;
		} else {
			state.category = null;
		}
	}
}