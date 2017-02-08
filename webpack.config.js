const path = require( 'path' );

const base_path = path.resolve(__dirname, 'src');

// webpack.config.js
module.exports = {
    // entry point of our application
    entry: ['babel-polyfill','./src/main.js'],
    // where to place the compiled bundle
    output: {
        path: './dist/',
        publicPath: "./dist/",
        filename: 'build.js'
    },
    devtool: 'source-map',
    resolve: {
        alias:{
            _components: path.join(base_path, 'components'),
            _services: path.join(base_path, 'services'),
            _vuex: path.join(base_path, 'vuex')
        }
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ],
        vue: {
            autoprefixer: {
                browsers: ['last 4 versions', 'IE 10']
            }
        }
    }
}
