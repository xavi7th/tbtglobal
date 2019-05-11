/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require( './bootstrap' );

import Vue from 'vue'
import Vue2Filters from 'vue2-filters'
import VeeValidate from 'vee-validate';

import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbvue/build/css/mdb.css';

import App from '@components/AppComponent.vue';


import {
    createRouter
} from './router';
import swal from 'sweetalert';


Vue.use( Vue2Filters )
Vue.use( VeeValidate );

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

// Vue.component( 'example-component', require( './components/ExampleComponent.vue' ).default );

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
    methods: {
        changeTransition( e ) {
            console.log( e );
        }
    },
    router
} );
