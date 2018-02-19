import Vue from 'vue'
import store from './store'
import App from './Components/App.vue'

Vue.use(require('moment'));

new Vue({
    el: '#app',
    store,
    render: h => h(App)
})
