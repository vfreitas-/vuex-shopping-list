const path = require( 'path' );

const base_path = path.resolve(__dirname, 'src');


module.exports = {
    entry: path.join(__dirname, 'src', 'main.js'),

    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: "/dist/",
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
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    postcss: [
                        require('autoprefixer')({
                            browsers: ['last 4 versions', 'IE 10']
                        })
                    ]
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
}
