const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

module.exports = {
  entry: './backend/server.js',
  target: 'node',
  mode: process.env.NODE_ENV,
  output: {
    filename: 'server.cjs',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  devtool: 'inline-source-map',
  stats: 'errors-only',
};
