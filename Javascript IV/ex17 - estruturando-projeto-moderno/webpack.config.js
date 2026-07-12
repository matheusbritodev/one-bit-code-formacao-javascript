const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
    },
    entry: {
        index: './src/index.js'
    },
    mode: 'production',
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.js$/,
            use: ['babel-loader']
        }]
    },
    output: {
        filename: '[name].min.js'
    },
    plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}