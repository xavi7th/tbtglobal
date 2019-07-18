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
        require( [ '@components/pages/' + name + 'Page' ], resolve );
    };
}

const title = title => title + ' | TFT Global'



export function createRouter() {
    return new VueRouter( {
        mode: 'history',
        linkActiveClass: 'tg-active',
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
                path: '/',
                component: Home,
                name: 'site.root',
                meta: {
                    title: title( 'Home' )
                },
            },
            {
                path: '/about-us',
                component: view( 'About' ),
                name: 'site.about',
                meta: {
                    title: title( 'About Us' )
                },
            },
            {
                path: '/projects',
                component: view( 'Projects' ),
                name: 'site.projects',
                meta: {
                    title: title( 'Projects' )
                },
            },
            {
                path: '/careers',
                component: view( 'Careers' ),
                name: 'site.careers',
                meta: {
                    title: title( 'Work With Us' )
                },
            },
            {
                path: '/contact',
                component: view( 'Contact' ),
                name: 'site.contact',
                meta: {
                    title: title( 'Contact Us' )
                },
            },
            {
                path: '/page-not-found',
                component: view( '404' ),
                name: 'site.404',
                meta: {
                    title: title( 'Page Not Found' )
                },
            },
            {
                path: '/services',
                component: view( 'Services' ),
                name: 'site.services',
                meta: {
                    title: title( 'Our Service' )
                },
                children: [ {
                        path: 'valve-maintenance',
                        component: view( 'services/Valve' ),
                        name: 'site.services.valve',
                        meta: {
                            title: title( 'Valve Maintenance Service' )
                        }
                    },
                    {
                        path: 'i-&-e-services',
                        component: view( 'services/IE' ),
                        name: 'site.services.ie',
                        meta: {
                            title: title( 'I&amp;E Services' )
                        }
                    },
                    {
                        path: 'insulation-of-hot-surfaces',
                        component: view( 'services/Insulation' ),
                        name: 'site.services.insulation',
                        meta: {
                            title: title( 'Insulation Services' )
                        }
                    },
                    {
                        path: 'installation-and-repairs-of-pumps',
                        component: view( 'services/Pumps' ),
                        name: 'site.services.pumps',
                        meta: {
                            title: title( 'Pumps Installation' )
                        }
                    },
                    {
                        path: 'sand-blasting-and-painting.',
                        component: view( 'services/SandBlasting' ),
                        name: 'site.services.sand',
                        meta: {
                            title: title( 'Sand Blasting Services' )
                        }
                    },
                    {
                        path: 'vessel-cleaning',
                        component: view( 'services/VesselCleaning' ),
                        name: 'site.services.vessel',
                        meta: {
                            title: title( 'Vessel Cleaning Services' )
                        }
                    },
                    {
                        path: 'procurement-and-supplies',
                        component: view( 'services/Procurement' ),
                        name: 'site.services.supplies',
                        meta: {
                            title: title( 'Procurement Services' )
                        }
                    },
                    {
                        path: 'mhe-services',
                        component: view( 'services/MHE' ),
                        name: 'site.services.mhe',
                        meta: {
                            title: title( 'MHE Services' )
                        }
                    },
                    {
                        path: 'manpower-supply',
                        component: view( 'services/ManpowerSupply' ),
                        name: 'site.services.manpower',
                        meta: {
                            title: title( 'Manpower Supply Services' )
                        }
                    },

                ],
            },
            {
                path: '*',
                redirect: {
                    name: 'site.404'
                }
            }
        ],

    } );
}
