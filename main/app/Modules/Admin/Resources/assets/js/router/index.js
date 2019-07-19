import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use( VueRouter );

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * @param  {string}   name     the filename (basename) of the view to load.
 */
function view( name ) {
    return function ( resolve ) {
        require( [ '@adminComponents/pages/' + name ], resolve );
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
                path: '/admin',
                name: 'admin.root',
                redirect: {
                    name: 'admin.sliders'
                }
            },
            {
                path: '/admin/dashboard',
                name: 'admin.dashboard',
                component: view( 'Dashboard' ),
                meta: {
                    title: 'Admin Manage Sliders'
                },
            },
            {
                path: '/admin/sliders',
                name: 'admin.sliders',
                component: view( 'Sliders' ),
                meta: {
                    title: 'Admin Manage Sliders'
                },
            },
            {
                path: '/admin/projects',
                name: 'admin.projects',
                component: view( 'Projects' ),
                meta: {
                    title: 'Admin Manage Projects'
                },
            },
            {
                path: '/admin/team-members',
                name: 'admin.team_members',
                component: view( 'TeamMembers' ),
                meta: {
                    title: 'Admin Manage Team Members'
                },
            },
            {
                path: '/admin/clients',
                name: 'admin.clients',
                component: view( 'Clients' ),
                meta: {
                    title: 'Admin Manage Clients'
                },
            },
            {
                path: '/admin/login',
                name: 'admin.login',
                component: view( 'Login' ),
                meta: {
                    title: 'Admin Login'
                },
            },
            {
                path: '*',
                redirect: {
                    name: 'admin.login'
                }
            }
        ],

    } );
}
