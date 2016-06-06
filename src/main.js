import Vue from 'vue';

import App from './components/App.vue';
import store from './vuex/store';

Vue.config.debug = true;

new Vue({
    el: 'body',
    store: store, //or just store,
    components: {
        app: App 
    }
});
