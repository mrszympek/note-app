import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutations'

Vue.use(Vuex)

const state = {
	notes: [
		{
			title: 'Sample note 1',
			description: 'lorem dasdiasbndiua nsidjna sijdnasdasd asdasda asdasd '
		},
		{
			title: 'Sample note 2',
			description: 'calkiem inne lorem ipsum uhabsdinasijdnj aodnoasd asod asmd oiaj doajo d'
		},
		{
			title: 'Sample note 3',
			description: 'calkiem inne lorem ipsum uhabsdinasijdnj aodnoasd asod asmd oiaj doajo d'
		},
		{
			title: 'Sample note 4',
			description: 'calkiem inne lorem ipsum uhabsdinasijdnj aodnoasd asod asmd oiaj doajo d'
		},
		{
			title: 'Sample note 5',
			description: 'calkiem inne lorem ipsum uhabsdinasijdnj aodnoasd asod asmd oiaj doajo d'
		},
		{
			title: 'Sample note 6',
			description: 'calkiem inne lorem ipsum uhabsdinasijdnj aodnoasd asod asmd oiaj doajo d'
		}
	]
}

export default new Vuex.Store({
	state,
	mutations,

})