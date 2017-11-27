const glob = require('glob');
const { statSync } = require('fs');
const { basename, join } = require('path');

const entry = glob.sync('src/o-*/')
  .map(item => [item, basename(item)])
  .filter(d => {
    try {
      statSync(join(__dirname, d[0], 'index.js'));
      return true;
    } catch (e) {
      return false;
    }
  })
  .reduce((col, cur) => {
    col[cur[1]] = join(__dirname, cur[0], 'index.js');
    return col;
  }, {});

module.exports = {
  entry,
  output: {
    filename: '[name]/index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ]
      }
    ]
  }
};
