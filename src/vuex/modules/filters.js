import {
    FILTER_CHANGED,
    CLEAR_FILTERS
} from './../mutation-types';

import ProductService from '_services/product';

//initial state
const state = {
    values: ProductService.getFilters(),
    term: null
};

const mutations = {

    [FILTER_CHANGED] (state, filter_field, product_field, prop, enabled) {
        if ( state.values.hasOwnProperty(filter_field) ) {
            if ( state.values[filter_field].hasOwnProperty(prop) ) {
                state.values[filter_field][prop] = enabled;
            }
        }
    },

    [CLEAR_FILTERS] (state) {
        state.values = ProductService.getFilters();
    }

};

export default {
    state,
    mutations
}
