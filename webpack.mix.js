const mix = require( 'laravel-mix' );

mix.setPublicPath( './public_html' );

let fs = require( 'fs-extra' );

let modules = fs.readdirSync( './main/app/Modules' ); // Make sure the path of your modules are correct

if ( modules && modules.length > 0 ) {
    modules.forEach( ( module ) => {
        let path = `./main/app/Modules/${module}/webpack.mix.js`;
        if ( fs.existsSync( path ) ) {
            require( path );
        }
    } );
}

/*
|--------------------------------------------------------------------------
| Mix Asset Management
|--------------------------------------------------------------------------
|
| Mix provides a clean, fluent API for defining some Webpack build steps
| for your Laravel application. By default, we are compiling the Sass
| file for the application as well as bundling up all the JS files.
|
*/
// mix.extract();
mix.autoload( {
    jquery: [ '$', 'window.jQuery', 'jQuery' ], // more than one
} );
mix
    .sourceMaps()
    .options( {

        fileLoaderDirs: {
            images: 'img',
        },
        postCss: [
            require( 'postcss-fixes' )(), // add fallbacks for rem units and other fixes
        ],

    } )
    .version();

mix.webpackConfig( {
    devtool: 'source-map'
} );
