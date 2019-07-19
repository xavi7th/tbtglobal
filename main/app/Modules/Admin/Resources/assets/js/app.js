/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require( '@assets/js/bootstrap' );

import 'material-design-icons-iconfont/dist/material-design-icons.css'
// import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify'
// import Vue2Filters from 'vue2-filters'
// import VeeValidate from 'vee-validate';
import {
    createRouter
} from './router';

import App from '@adminComponents/AppComponent.vue';

Vue.use( Vuetify, {
    iconfont: 'md',
    theme: {
        primary: '#22aad3',
        secondary: '#e91e63',
        accent: '#ff5722',
        error: '#f44336',
        warning: '#ffc107',
        info: '#03a9f4',
        success: '#4caf50',
    }
} )
// Vue.use( Vue2Filters )
// Vue.use( VeeValidate );

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

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
