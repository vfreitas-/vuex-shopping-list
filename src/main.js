import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

import App from './components/App.vue'
import store from './vuex/store'

Vue.use(VueMaterial)


new Vue({
    store,
    ...App
}).$mount('#app')
