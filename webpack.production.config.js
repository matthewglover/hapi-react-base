const { optimize, BannerPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: `${__dirname}/app/main.jsx`,

  output: {
    path: `${__dirname}/build`,
    filename: '[name]-[hash].js'
  },

  module: {
    loaders: [
      { test: /\.json$/, loader: 'json' },
      { test: /\.jsx*$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css?modules!postcss') },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },

  postcss: [
    require('autoprefixer')
  ],

  plugins: [
    new BannerPlugin('Copyright Matthew Glover 2016'),
    new HtmlWebpackPlugin({ template: `${__dirname}/app/index.tmpl.html` }),
    new optimize.OccurenceOrderPlugin(),
    new optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('[name]-[hash].css')
  ]
};
