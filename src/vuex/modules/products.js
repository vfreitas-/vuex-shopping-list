import {
    RECEIVE_PRODUCTS,
    FILTER_PRODUCTS,
    TOGGLE_LOADER
} from './../mutation-types';

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

    [FILTER_PRODUCTS] (state, filters) {
        let categories = []
          , variations = [];

        for (let obj in filters.categories) {
            if ( filters.categories.hasOwnProperty(obj) ) {
                if (filters.categories[obj]) categories.push(obj);
            }
        }

        for (let obj in filters.variations) {
            if ( filters.variations.hasOwnProperty(obj) ) {
                if (filters.variations[obj]) variations.push(obj);
            }
        }

        state.list = state.list.map(p => {
            if (categories.length === 0 && variations.length === 0) {
                p.show = true;
                return p;
            }

            if (
                categories.indexOf(p.category) > -1 ||
                variations.indexOf(p.variation) > -1
            ) {
                p.show = true;
            } else {
                p.show = false;
            }
            return p;
        });
    }
};

export default {
    state,
    mutations
}
