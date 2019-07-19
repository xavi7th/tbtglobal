const mix = require( 'laravel-mix' );
require( 'laravel-mix-merge-manifest' );

mix.webpackConfig( {
    resolve: {
        extensions: [ '.js', '.vue', '.json' ],
        alias: {
            '@adminComponents': __dirname + '/Resources/assets/js/components',
            '@adminAssets': __dirname + '/Resources/assets/',
        },
    },
} )

mix.js( __dirname + '/Resources/assets/js/app.js', 'js/admin-app.js' )
    .sass( __dirname + '/Resources/assets/sass/app.scss', 'css/admin-app.css' );

// if ( mix.inProduction() ) {
//     mix.version();
// }
