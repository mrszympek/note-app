import * as types from './mutations-types'

export const addNote = ({commit}, payload) => {
	commit(types.ADD_NOTE, payload)
}

export const onRemove = ({commit}, payload) => {
	commit(types.REMOVE_NOTE, payload)
}

export const setCategory = ({commit}, payload) => {
	commit(types.SET_CATEGORY, payload)
}