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
    // add alias for application code directory
        alias:{
            _components: path.join(base_path, 'components'),
            _services: path.join(base_path, 'services'),
            _vuex: path.join(base_path, 'vuex')
        }
    },
    module: {
        // `loaders` is an array of loaders to use.
        // here we are only configuring vue-loader
        loaders: [
            {
                test: /\.vue$/, // a regex for matching all files that end in `.vue`
                exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
                loader: 'vue'   // loader to use for matched files
            },
            {
                test: /\.js$/,
                exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
                loader: 'babel'
            }
        ],
        vue: {
            // configure autoprefixer
            autoprefixer: {
                browsers: ['last 4 versions', 'IE 10']
            }
        }
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    }
}
