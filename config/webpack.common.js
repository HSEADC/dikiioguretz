const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const htmlPages = require('./webpack.pages')
//const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    index: './src/js/index.js',
    tests: './src/js/tests.js',
    test1: './src/js/test1.js'
  },
  // output: {
  //   path: path.resolve(__dirname, 'docs'),
  //   filename: '[name].js'
  // },
  output: {
  path: path.resolve(__dirname, 'docs'),
  filename: '[name].[contenthash].js',
  chunkFilename: '[name].[contenthash].js',
  clean: true
},

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },

      {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },

      {
        test: /\.html$/i,
        loader: 'html-loader'
      },

      {
        test: /\.(png|svg|jpg|jpeg|webp|gif)/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },

      {
        test: /\.(ttf|otf|woff\woff2)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]'
        }
      }
    ]
  },
  optimization: {
    // minimizer: [new CssMinimizerPlugin()]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    ...htmlPages
    // new CopyPlugin({
    //   patterns: [
    //     { from: "source", to: "dest" },
    //     { from: "other", to: "public" },
    //   ],
    // }),
  ]
}
