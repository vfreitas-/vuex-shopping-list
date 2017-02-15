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
        [FILTER_CHANGED] (state, {filterField, productField, prop, enabled}) {
            console.log(filterField, productField, prop, enabled)
            if ( state.values.hasOwnProperty(filterField) ) {
                if ( state.values[filterField].hasOwnProperty(prop) ) {
                    state.values[filterField][prop] = enabled
                }
            }
        },

        [CLEAR_FILTERS] (state) {
            state.values = ProductService.getFilters()
        }
    },
    actions: {
        updateFilters ({ commit, state }, data) {
            commit(FILTER_CHANGED, data)
            commit(FILTER_PRODUCTS, state.values)
        }
    }
}
