const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  devtool: 'none',

  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      // HTML LOADER + plug
      {
        test: /\.html$/,
        use: [
          { loader: 'html-loader' },
        ],
      },

      // FILE LOADER - image
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]',
          output: 'img/',
          // url path inside css AND html after build
          publicPath: '../',
        },
      },

      // FILE LOADER - icon
      {
        test: /\.(svg)$/,
        loader: 'file-loader',
        options: {
          name: 'ico/[name].[ext]',
          output: 'ico/',
        },
      },

      // FILE LOADER - font
      {
        test: /\.(woff|ttf)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },

      // CSS LOADER + split plug
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },

      // SASS LOADER
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),

    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),

    new CssMinimizerPlugin(),

    new CopyPlugin({
      patterns: [
        { from: 'src/assets', to: './assets' },
      ],
    }),
  ],
};