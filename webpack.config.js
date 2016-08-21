const { BannerPlugin, HotModuleReplacementPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',

  entry: `${__dirname}/app/main.jsx`,

  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.json$/, loader: 'json' },
      { test: /\.jsx*$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.css$/, loader: 'style!css?modules!postcss' },
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
