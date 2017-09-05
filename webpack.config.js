const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin');

module.exports = {
  entry: ['./index.js'],
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'js/build.js'
  },
  module: {
    rules: [{
      test: /\.html$/,
      use: [{ loader: 'html-loader', options: { interpolate: true } }]
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader']
      })
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]?[hash]',
        outputPath: 'fonts/'
      }
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]?[hash]',
        outputPath: 'images/'
      }
    }]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    }),
    new ExtractTextPlugin('css/styles.css')
  ]
}

if (process.env.NODE_ENV === 'production') {
  var rm = require('rimraf');

  rm(path.join(__dirname, './dist'), err => {
    if (err) throw err;
  });

  // module.exports.output.publicPath = './';

  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    // new StyleExtHtmlWebpackPlugin(),
    new webpack.LoaderOptionsPlugin({ minimize: true })
  ])
}
