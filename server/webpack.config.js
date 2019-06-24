const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path')
const env = require('./prod.env')
function _externals () {
  let manifest = require('../package.json');
  let dependencies = manifest.dependencies;
  let externals = {};
  for (let p in dependencies) {
      externals[p] = 'commonjs ' + p;
  }
  return externals;
}
const externals = _externals();

const config = {
  entry: './server/start.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.bundle.js'
  },
  module: {
    // 解决Critical dependency: require function is used in a way in which dependencies cannot be statically extracted的问题，require函数不能以静态提取依赖关系的方式使用。
    unknownContextCritical: false,
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader?cacheDirectory=true'
        }
      }
    ]
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new UglifyJsPlugin()
  ],
  resolve: {
    extensions: ['.js']
  },
  externals: externals,
  target: 'node',
  node: {
    console: true,
    global: true,
    process: true,
    Buffer: true,
    __filename: true,
    __dirname: true,
    setImmediate: true,
    path: true,
    fs: 'empty',
    net: 'empty'
  }
}

module.exports = config
