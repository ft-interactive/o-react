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

const config = {
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
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['bower_components']
            }
          },
        ]
      }
    ]
  }
};

const monoConfig = {
  entry: join(__dirname, 'index.js'),
  output: {
    path: join(__dirname, 'dist'),
    filename: 'o-react.js',
  },
};

monoConfig.module = config.module;

module.exports = [
  config,
  monoConfig, // For some reason I'm getting the following error: Conflict: Multiple assets emit to the same filename o-react.js
];
