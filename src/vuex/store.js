import Vue from 'vue'
import Vuex from 'vuex'

import products from './modules/products'
import filters from './modules/filters'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        products,
        filters
    }
})
