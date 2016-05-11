var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: './build/app.js',
  output: {
    path: './dist/',
    filename: 'main.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      { test: /.jsx?$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: ['es2015', 'react'] } }
    ]
  },
  plugins: [
    new CommonsChunkPlugin('common.js'),
    new OpenBrowserPlugin({ url: 'http://localhost:3000' })
  ]
};