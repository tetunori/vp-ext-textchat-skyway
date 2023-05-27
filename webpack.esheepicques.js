const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const path = require('path')

const outDir = path.resolve(__dirname, 'dist')

module.exports = merge(common, {
  entry: './src/Esheepicques',
  output: {
    path: outDir,
    filename: 'Esheepicques.js',
    libraryTarget: 'jsonp'
  },
})
