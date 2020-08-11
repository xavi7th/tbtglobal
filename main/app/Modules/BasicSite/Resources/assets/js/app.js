require( './bootstrap' );

import Vue from 'vue'
import LoadScript from 'vue-plugin-load-script'

import App from '@components/AppComponent.vue';

/**
 * Initialise a global window object containing a Vue instance
 * for the purpose of sending events from Vue to outer space (jQuery in this instance)
 */
window.vueEventBus = new Vue();

import {
    createRouter
} from './router';

Vue.use( LoadScript )

const router = createRouter();
router.beforeEach( ( to, from, next ) => {
    document.title = to.meta.title;
    next();
} );

const app = new Vue( {
    el: '#app',
    components: {
        App
    },
    template: '<App/>',
    data: {
        transitionName: 'page'
    },
    router
} );
