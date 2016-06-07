import {
    FILTER_CHANGED,
    SEARCH_TERM,
    RECEIVE_PRODUCTS,
    TOGGLE_LOADER
} from '../../mutation-types';

//initial state
const state = {
    list: [],
    loader: true
};

const mutations = {

    [RECEIVE_PRODUCTS] (state, products) {
        state.list = products;
    },

    [TOGGLE_LOADER] (state, bool) {
        state.loader = bool;
    },

    [FILTER_CHANGED] (state, filter_field, product_field, prop, enabled) {
        state.list = state.list.map(p => {
            if ( p.hasOwnProperty(product_field) ) {
                if ( p[product_field] !== prop ) {
                    p.show = !enabled;
                }
            }
            return p;
        });
    },

    [SEARCH_TERM] (state, term) {

    }
};

export default {
    state,
    mutations
}
