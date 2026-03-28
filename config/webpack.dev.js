// const { merge } = require('webpack-merge');
// const common = require('./webpack.common.js');
// const path = require('path');

// module.exports = merge(common, {
//     mode: 'development',
//     devtool: 'inline-source-map',
//     devServer: {
//         static: {
//             directory:  path.resolve(__dirname, 'docs'),
//             watch: true,
//         },
//         hot: true,
//         open:true,
//     },
//     output: {
//     path: path.resolve('.', 'dev_build'),
//     filename: 'index.js',
//     clean: true
//     },
// })

const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dev_build',

    historyApiFallback: {
      rewrites: [{ from: /./, to: '/pages/404.html' }]
    }
  },
  output: {
    path: path.resolve('.', 'dev_build'),
    clean: true
  }
})
