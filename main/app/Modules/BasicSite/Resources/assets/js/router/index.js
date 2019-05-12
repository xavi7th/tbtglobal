import Vue from 'vue';
import VueRouter from 'vue-router';

import {
    siteRootUrl,
    siteWelcome
} from '../config/endpoints';

import Home from '@components/pages/HomePage';

Vue.use( VueRouter );

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * @param  {string}   name     the filename (basename) of the view to load.
 */
function view( name ) {
    return function ( resolve ) {
        require( [ '../components/' + name ], resolve );
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
                path: siteRootUrl,
                // redirect: {
                //     name: 'site.root'
                // },
                component: Home,
                meta: {
                    title: 'Welcome | Home'
                },
                children: [
                    // {
                    //       // ViewAgents will be rendered inside App's <router-view>
                    //       // when /tcom01/agents is matched
                    //       path: siteWelcome,
                    //       component: view('ExampleComponent'),
                    //       name: 'site.root',
                    //       meta: {
                    //           title: 'Home'
                    //       }
                    //   },
                    // {
                    //     path: 'agent/:id/edit',
                    //     component: view('AdminEditAgentsComponent'),
                    //     name: 'admin.edit-agent',
                    //     meta: {
                    //         title: 'Edit Agent Details | Fastplay24 Admin'
                    //     }
                    // },
                ],

            },
            {
                path: '*',
                redirect: {
                    name: 'site.root'
                }
            }
        ],

    } );
}
