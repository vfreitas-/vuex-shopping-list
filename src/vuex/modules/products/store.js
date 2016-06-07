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

    [FILTER_CHANGED] (state, filter) {
        console.log('filter changed');
    },

    [SEARCH_TERM] (state, term) {

    }
};

export default {
    state,
    mutations
}
