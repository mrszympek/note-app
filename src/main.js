import Vue from 'vue'
import store from './store'
import App from './Components/App.vue'

new Vue({
    el: '#app',
    store,
    render: h => h(App)
})
