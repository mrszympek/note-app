import * as types from './mutations-types'

export const mutations = {
	[types.ADD_NOTE](state, payload) {
		const newNote = {
			title: payload.title,
			description: payload.description
		}

		state.notes.push(newNote);
	}
}