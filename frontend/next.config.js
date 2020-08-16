/* const withSass = require('@zeit/next-sass')
const withPlugins = require('next-compose-plugins')

const dotenv = require('dotenv')

dotenv.config()

const plugins = [
  [
    withSass({
      cssModules: true,
      cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: '[local]___[hash:base64:5]',
      },
    }),
  ],
]

const nextConfig = {
  env: {},
}

module.exports = withPlugins(plugins, nextConfig, withSass) */

module.exports = {
  rules: [
    {
      enforce: 'pre',
      test: /\.jsx?$/,
      loader: 'eslint-loader',
      exclude: /node_modules/,
    },
    { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
    {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000',
    },
    {
      test: /\.scss$/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
        },
        {
          loader: 'sass-loader',
        },
      ],
    },
  ],
}
