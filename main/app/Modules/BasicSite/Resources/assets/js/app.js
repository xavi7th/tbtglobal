/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require( './bootstrap' );

import Vue from 'vue'
import LoadScript from 'vue-plugin-load-script'
// import Vue2Filters from 'vue2-filters'
// import VeeValidate from 'vee-validate';

import App from '@components/AppComponent.vue';


import {
    createRouter
} from './router';

Vue.use( LoadScript )
// Vue.use( Vue2Filters )
// Vue.use( VeeValidate );

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
