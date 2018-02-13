import * as types from './mutations-types'

export const mutations = {
	[types.ADD_NOTE] (state, payload) {
		state.notes.push(...payload)
	}
}

