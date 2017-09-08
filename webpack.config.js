var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractSass = new ExtractTextPlugin({filename: 'css/bundle.css'});


module.exports = {
  entry: ['./js/App.js', './css/main.scss'],
  devtool: 'inline-source-map',
  output: {
    publicPath: '/build/',  // path to use in index.html  
    path: __dirname + '/build',  // output path webpack will use
    filename: 'js/bundle.js',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: { presets: ['es2015'] }  // ES5 from ES6
    }],
    rules: [{
      test: /\.scss$/,
      use: extractSass.extract({
        use: [{ loader: 'css-loader' }, { loader: 'sass-loader' }],
        fallback: 'style-loader'
      })
    }]
  },
  plugins: [
    extractSass,
  ],  
  resolve: {
    extensions: ['.js']
  },
  devServer: {
    historyApiFallback: true
  }
};