const mix = require( 'laravel-mix' );
require( 'laravel-mix-merge-manifest' );

mix.webpackConfig( {
    resolve: {
        extensions: [ '.js', '.vue', '.json' ],
        alias: {
            '@components': __dirname + '/Resources/assets/js/components',
            '@assets': __dirname + '/Resources/assets/',
        },
    },
} )



// mix.setPublicPath( '../../public' ).mergeManifest();

mix.js( __dirname + '/Resources/assets/js/app.js', 'js/app.js' )
    .sass( __dirname + '/Resources/assets/sass/app.scss', 'css/app.css' );

// if ( mix.inProduction() ) {
//     mix.version();
// }
