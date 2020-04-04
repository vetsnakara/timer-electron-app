const Dotenv = require('dotenv-webpack')

module.exports = {
  mode: 'development',

  output: {
    publicPath: '/'
  },

  plugins: [
    new Dotenv({
      path: './.env.development'
    })
  ],

  devServer: {
    port: 9000,
    hot: true,
    overlay: true,
    historyApiFallback: true
  },

  devtool: 'eval-source-map'
}
