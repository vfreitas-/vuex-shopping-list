import {
    TOGGLE,
    SET_TOGGLE
} from './../mutation-types'



export default {
    state: {
        sidebar: false  
    },
    mutations: {
        [TOGGLE] (state, type) {
            if (state.hasOwnProperty(type)) {
                state[type] = !state[type]
            }
        },

        [SET_TOGGLE] (state, value) {
            if (state[type]) {
                state[type] = value
            }
        }
    },
    actions: {
        toggle ({ commit }, type, value = null) {
            if (value === null) {
                commit(TOGGLE, type)
            } else {
                commit(SET_TOGGLE, type, value)
            }
        }
    }
}
