const { BannerPlugin, HotModuleReplacementPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',

  entry: `${__dirname}/app/main.js`,

  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.json$/, loader: 'json' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.scss$/, loader: 'style!css!sass' },
    ]
  },

  plugins: [
    new BannerPlugin('Copyright Matthew Glover 2016'),
    new HtmlWebpackPlugin({ template: `${__dirname}/app/index.tmpl.html` }),
    new HotModuleReplacementPlugin()
  ],

  devServer: {
    contentBase: './public',
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true
  }
};
