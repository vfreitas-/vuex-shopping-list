import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

import App from './components/App.vue'
import store from './vuex/store'

import * as filters from './filters'

Vue.use(VueMaterial)

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

new Vue({
    store,
    ...App
}).$mount('#app')
