import {
    FILTER_CHANGED,
    CLEAR_FILTERS
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
        updateFilters ({ dispatch, state }, filter_field, product_field, prop, enabled) {
            dispatch(mutations.FILTER_CHANGED, filter_field, product_field, prop, enabled)
            dispatch(mutations.FILTER_PRODUCTS, state.filters.values)
        }
    }
}
