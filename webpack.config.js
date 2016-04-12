var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './js/app.js'
  ],
  output: {
    path: path.resolve('build'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: "/node_modules/",
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        loader: "style!css"
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]

};
