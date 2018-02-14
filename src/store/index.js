import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

const state = {
	notes: [
		{
			date: '23 June,  2017',
			title: 'Sample note 1',
			description: 'lorem dasdiasbndiua nsidjna sijdnasdasd asdasda asdasd '
		},
		{
            date: '20 June,  2017',
            title: 'Sample note 2',
			description: 'calkiem inne lorem ipsum uhabsdinasijdnj aodnoasd asod asmd oiaj doajo d'
		},
		{
			date: '15 June,  2017',
            title: 'Sample note 3',
			description: 'calkiem inne lorem ipsum uhabsdinasijdnj aodnoasd asod asmd oiaj doajo d'
		},
		{
            date: '10 June,  2017',
            title: 'Sample note 4',
			description: 'calkiem inne lorem ipsum uhabsdinasijdnj aodnoasd asod asmd oiaj doajo d'
		},
		{
            date: '1 June,  2017',
            title: 'Sample note 5',
			description: 'calkiem inne lorem ipsum uhabsdinasijdnj aodnoasd asod asmd oiaj doajo d'
		},
		{
            date: '25 May,  2017',
            title: 'Sample note 6',
			description: 'calkiem inne lorem ipsum uhabsdinasijdnj aodnoasd asod asmd oiaj doajo d'
		}
	]
}

export default new Vuex.Store({
	state,
	mutations,
	actions
})