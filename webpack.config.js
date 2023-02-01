const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output : {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'docs')
    },
    plugins: [
        new HTMLPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ]
}