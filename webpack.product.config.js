const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src'),
  output: {
    filename: './react-infinite-slide.min.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
}
