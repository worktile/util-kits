const path = require('path');
const webpack = require('webpack');

module.exports = function(env) {
    env = env || {};
    const config = {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: env.min ? 'util.bundle.min.js' : 'util.bundle.js',
            library: "utilKits",
            libraryTarget: "umd"
        },
        plugins: []
    };
    if (env.min) {
        config.plugins.push(new webpack.optimize.UglifyJsPlugin());
    } else {
        config.devtool = 'source-map';
    }
    return config;
};