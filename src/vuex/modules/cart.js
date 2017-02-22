import {
    ADD_PRODUCT,
    REMOVE_PRODUCT,

} from './../mutation-types'

import Vue from 'vue'

export default {
    state: {
        products: [],
        total: 0,
        count: 0
    },
    mutations: {
        [ADD_PRODUCT] (state, product) {
            let productExist = state.products.find(p => p.id === product.id)

            if (productExist) {
                state.products = state.products.map(p => {
                    if (p.id === product.id) {
                        p.quantity += 1
                    }

                    return p
                })
            } else {
                Vue.set(product, 'quantity', 1)
                state.products.push(product)
            }

            state.total += product.price
            state.count += 1
        },

        [REMOVE_PRODUCT] (state, id) {
            state.products = state.products.filter(p => p.id !== id)
            state.total = state.products.reduce((a, b) => a + (b.price * b.quantity), 0)
            state.count = state.products.length
        }
    },
    actions: {
        addProduct ({ commit }, product) {
            commit(ADD_PRODUCT, product)
        },
        removeProduct ({ commit }, id) {
            commit(REMOVE_PRODUCT, id)
        }
    }
}
