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

    [FILTER_CHANGED] (state, field, prop, enabled) {
        if ( state.values.hasOwnProperty(field) ) {
            if ( state.values[field].hasOwnProperty(prop) ) {
                state.values[field][prop] = enabled;
            }
        }
    }

};

export default {
    state,
    mutations
}
