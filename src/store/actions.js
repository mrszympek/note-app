import * as types from './mutations-types'

export const addNote = ({commit}, payload) => {
	commit(types.ADD_NOTE, payload)
}