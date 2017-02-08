import Vue from 'vue';
import VueAnimatedList from 'vue-animated-list';

Vue.use(VueAnimatedList);

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
