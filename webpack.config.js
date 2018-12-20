const webpack = require('webpack');

module.exports = {
    entry: `./client/src/index.jsx`,
    output: {
        filename: 'bundle.js',
        path: __dirname + '/client/dist',
        publicPath: '/'
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: '/node_modules/',
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.jsx', '.ts', '.js']
    }
};