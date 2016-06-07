import {
    FILTER_CHANGED,
    SEARCH_TERM,
    RECEIVE_PRODUCTS,
    TOGGLE_LOADER
} from '../../mutation-types';

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
    }

};

export default {
    state,
    mutations
}
