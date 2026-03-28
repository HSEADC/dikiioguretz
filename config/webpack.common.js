const HtmlWebpackPlugin = require('html-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const htmlPages = require('./webpack.pages.js')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/js/index.js',
    tests: './src/js/tests.js',
    test1: './src/js/test1.js',
    articles: './src/js/articles.js',
    allStyles: './src/js/allStyles.js',
    websites: './src/js/websites.js',
    memes: './src/js/memes.js',
    game1: './src/js/game.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve('.', 'docs')
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
        test: /\.css$/,
        exclude: /node_modules/,
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
  plugins: [new MiniCssExtractPlugin(), ...htmlPages],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  },
  resolve: {
    fallback: {
      stream: require.resolve('stream-browserify')
    }
  }
}
