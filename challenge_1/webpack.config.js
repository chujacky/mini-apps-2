const path = require('path');

const SRC_DIR = path.join(__dirname, './client');
const DIST_DIR = path.join(__dirname, './public');

module.exports = {
  entry: `${SRC_DIR}/app.jsx`,
  output: {
    filename: 'app.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options:{
          presets: ['@babel/preset-env', '@babel/preset-react'],
        }
      }
    ]
  }
}