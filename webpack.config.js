var webpack = require('webpack');

var config = {
    context: __dirname + '/',
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },


}

if(process.env.NODE_ENV === 'production'){
    config.output.path = __dirname + '/dist';
}

module.exports = config;