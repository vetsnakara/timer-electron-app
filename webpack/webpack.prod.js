const Dotenv = require('dotenv-webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',

  output: {
    publicPath: './'
  },

  plugins: [
    new Dotenv({
      path: './.env.production'
    }),

    new CleanWebpackPlugin()
  ],

  devtool: 'source-map'
}
