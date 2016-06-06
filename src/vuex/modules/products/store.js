import {
    FILTER_CHANGED,
    SEARCH_TERM,
    RECEIVE_PRODUCTS
} from '../../mutation-types';

//initial state
const state = {
    list: []
};

const mutations = {

    [RECEIVE_PRODUCTS] (state, products) {
        state.list = products;
    },

    [FILTER_CHANGED] (state, filter) {

    },

    [SEARCH_TERM] (state, term) {

    }
};

export default {
    state,
    mutations
}
