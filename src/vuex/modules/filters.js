import {
    FILTER_CHANGED,
    CLEAR_FILTERS,
    FILTER_PRODUCTS
} from './../mutation-types'

import ProductService from '_services/product'

export default {
    state: {
        values: ProductService.getFilters(),
        term: null    
    },
    mutations: {
        [FILTER_CHANGED] (state, filter_field, product_field, prop, enabled) {
            if ( state.values.hasOwnProperty(filter_field) ) {
                if ( state.values[filter_field].hasOwnProperty(prop) ) {
                    state.values[filter_field][prop] = enabled
                }
            }
        },

        [CLEAR_FILTERS] (state) {
            state.values = ProductService.getFilters()
        }
    },
    actions: {
        updateFilters ({ commit, state }, filter_field, product_field, prop, enabled) {
            // console.log(filter_field, product_field, prop, enabled)
            commit(FILTER_CHANGED, filter_field, product_field, prop, enabled)
            commit(FILTER_PRODUCTS, state.values)
        }
    }
}
