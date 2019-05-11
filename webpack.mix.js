const mix = require( 'laravel-mix' );

mix.setPublicPath( './public_html' );

let glob = require( 'glob' );
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

let bladeFiles = glob.sync(
    Mix.paths.root( './main/resources/views/**/*.blade.php' )
);

let jsFiles = glob.sync(
    Mix.paths.root( './main/app/Modules/**/*.js' )
);

let htmlFiles = glob.sync(
    Mix.paths.root( './public_html/views/**/*.html' )
);

let moduleBladeFiles = glob.sync(
    Mix.paths.root( './main/app/Modules/**/*.blade.php' )
);

let vueFiles = glob.sync(
    Mix.paths.root( './main/app/Modules/**/*.vue' )
);

let paths = vueFiles.concat( moduleBladeFiles ).concat( jsFiles )
    .concat( htmlFiles ).concat( bladeFiles );

// console.log( paths );

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
    // .sourceMaps()
    .options( {
        // processCssUrls: false,
        purifyCss: {
            paths: paths,
            purifyOptions: {
                whitelist: [ '*datepicker*', '*owl*', '*sweetalert*' ],
                // extensions: ['html', 'php', 'js', 'php'],
                info: false,
                rejected: false,
            }
        },
        fileLoaderDirs: {
            images: 'img',
            // fonts: 'web-fonts'
        },
        postCss: [
            require( 'postcss-fixes' )(), // add fallbacks for rem units and other fixes
        ],
        // plugins: [
        //     new webpack.IgnorePlugin( /^\.\/locale$/, /moment$/ )
        // ]
    } )
    .version();

// mix.webpackConfig( {
//     devtool: 'source-map'
// } );

// mix.browserSync({
// 	//  proxy: "localhost:8000",
// 	reloadDelay: 1000,
// 	// Don't show any notifications in the browser.
// 	notify: false,
// 	// Inject CSS changes
// 	injectChanges: true,
// 	ghostMode: {
// 			clicks: false,
// 			forms: false,
// 			scroll: false
// 	},
// 	// Attempt to use the URL "http://my-private-site.localtunnel.me"
// 	tunnel: "daniel",
// 	// Will not attempt to determine your network status, assumes you're ONLINE.
// 	online: false,
// 	proxy: {
// 		target: 'localhost:8000',
// 		reqHeaders: function () {
// 			return {
// 				host: "localhost:3000"
// 			};
// 		}
// 	},
// 	// browser: "vivaldi",
// 	browser: ["google chrome"],
// 	files: [
//
//         //  'app/**/*.php',
//          'resources/views/**/*.php',
//          '!resources/**/*.js',
//          'public/**/*.html',
//          'public/**/*.php',
//          'public/js/**/*.js',
//          '!public/js/**/libraries.js',
//          '!public/css/**/*.css',
//          '!public/css/**/*.map',
//          'app/Modules/**/*.vue',
//          'app/Modules/**/*.blade.php'
//      ],
// });
