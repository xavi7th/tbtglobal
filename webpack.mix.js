const mix = require('laravel-mix');

let fs = require('fs-extra');

let modules = fs.readdirSync('./main/app/Modules'); // Make sure the path of your modules are correct

if (modules && modules.length > 0) {
    modules.forEach((module) => {
        let path = `./main/app/Modules/${module}/webpack.mix.js`;
        if (fs.existsSync(path)) {
            require(path);
        }
    });

}
mix.setPublicPath('./public_html');

// mix.extract();
mix.autoload({
    jquery: ['$', 'window.jQuery', 'jQuery'], // more than one
});
mix
    .options({

        fileLoaderDirs: {
            images: 'img',
        },
        postCss: [
            require('postcss-fixes')(), // add fallbacks for rem units and other fixes
        ],

    })
    // .version();
    .then(() => {
        const _ = require('lodash')
        let oldManifestData = JSON.parse(fs.readFileSync('./public_html/mix-manifest.json', 'utf-8'))
        let newManifestData = {};

        _.map(oldManifestData, (actualFilename, mixKeyName) => {
            if (_.startsWith(mixKeyName, '/css')) {
                /** Exclude CSS files from renaming for now till we start cache busting them */
                newManifestData[mixKeyName] = actualFilename;
            } else {
                let newMixKeyName = _.split(mixKeyName, '.')
                    .tap(o => {
                        _.pullAt(o, 1);
                    })
                    .join('.')

                /** If the js extension has been stripped we add it back */
                newMixKeyName = _.endsWith(newMixKeyName, '.js') ? newMixKeyName : newMixKeyName + '.js'

                newManifestData[newMixKeyName] = actualFilename;
            }

        });

        let data = JSON.stringify(newManifestData, null, 2);
        fs.writeFileSync('./public_html/mix-manifest.json', data);
    })

if (!mix.inProduction()) {
    mix
        .sourceMaps()
    mix.webpackConfig({
        devtool: 'source-map'
    });
}
