import * as types from './mutations-types'

export const mutations = {
	[types.ADD_NOTE](state) {
		const newNote = {
			title: '',
			description: ''
		}

		state.notes.push(newNote);
	}
}