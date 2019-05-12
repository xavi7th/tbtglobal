const mix = require( 'laravel-mix' );
require( 'laravel-mix-merge-manifest' );

mix.webpackConfig( {
    resolve: {
        extensions: [ '.js', '.vue', '.json' ],
        alias: {
            '@dashboardComponents': __dirname + '/Resources/assets/js/components',
            '@dashboardAssets': __dirname + '/Resources/assets/',
        },
    },
} )

mix.js( __dirname + '/Resources/assets/js/app.js', 'js/dashboard-app.js' )
    .sass( __dirname + '/Resources/assets/sass/app.scss', 'css/dashboard-app.css' );
