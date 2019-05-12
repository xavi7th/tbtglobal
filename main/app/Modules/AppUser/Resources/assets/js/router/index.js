import Vue from 'vue';
import VueRouter from 'vue-router';
import {
    dashboardRootUrl,
    userProfile,
    pageNotFound
} from '../config/endpoints';

import Dashboard from '@dashboardComponents/pages/UserDashboard';
import Profile from '@dashboardComponents/pages/UserProfile';

Vue.use( VueRouter );

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * @param  {string}   name     the filename (basename) of the view to load.
 */
function view( name ) {
    return function ( resolve ) {
        require( [ '@dashboardComponents/pages/' + name ], resolve );
    };
}



export function createRouter() {
    return new VueRouter( {
        mode: 'history',
        scrollBehavior( to, from, savedPosition ) {
            if ( savedPosition ) {
                return savedPosition;
            } else {
                return {
                    x: 0,
                    y: 0
                };
            }
        },
        routes: [ {
                path: dashboardRootUrl,
                component: Dashboard,
                name: 'user.dashboard',
                props: {
                    page: 1
                },
                meta: {
                    title: 'Welcome | Home'
                }
            },
            {
                path: userProfile,
                component: view( 'UserProfile' ),
                name: 'user.profile',
                props: {
                    page: 2
                },
                meta: {
                    title: 'Home'
                }
            },
            {
                path: pageNotFound,
                component: view( '404' ),
                name: 'user.404',
                props: {
                    page: 5
                },
                meta: {
                    title: 'Page Not Found'
                }

            },
            {
                path: '*',
                props: {
                    page: 5
                },
                redirect: {
                    name: 'user.404'
                }
            }
        ],

    } );
}
