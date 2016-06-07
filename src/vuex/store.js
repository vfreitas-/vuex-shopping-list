import Vue from 'vue';
import Vuex from 'vuex';

import products from './modules/products/store';
import filters from './modules/filters/store';

Vue.use(Vuex);
Vue.config.debug = true;

export default new Vuex.Store({
    modules: {
        products,
        filters
    }
});
