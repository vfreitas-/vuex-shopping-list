import {
    ADD_PRODUCT,
    REMOVE_PRODUCT,

} from './../mutation-types'

export default {
    state: {
        products: [],
        total: 0,
        count: 0
    },
    mutations: {
        [ADD_PRODUCT] (state, product) {
            state.products.push(product)
            state.total += parseFloat(product.price)
            state.count += 1
        },

        [REMOVE_PRODUCT] (state, id) {
            state.products = state.products.filter(p => p.id !== id)
            state.total = state.products.reduce((a, b) => a + b.price, 0)
            state.count = products.length + 1
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
