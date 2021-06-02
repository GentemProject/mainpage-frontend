const fetch = require('isomorphic-unfetch')
let API_BACKEND
if (process.env.NODE_ENV === 'development') {
  API_BACKEND = 'https://api-dev.gentem.org'
}
if (process.env.NODE_ENV === 'production') {
  API_BACKEND = 'https://api-prod.gentem.org'
}
module.exports = {
  env: {
    API_BACKEND: API_BACKEND,
  },
  generateBuildId: async () => {
    if (process.env.BUILD_ID) {
      return process.env.BUILD_ID
    } else {
      return `${new Date().getTime()}`
    }
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    const paths = {
      '/': { page: '/' },
      '/projects': { page: '/projects' },
      '/admin': { page: '/admin' },
      '/util/preguntas-frecuentes': { page: '/util/preguntas-frecuentes' },
      '/util/privacidad': { page: '/util/privacidad' },
      '/util/terminos': { page: '/util/terminos' },
    }
    const res = await fetch('https://api.gentem.org/api/projects/getall')
    const data = await res.json()
    const orgs = data.map((entry) => entry)
    orgs.forEach((org) => {
      paths[`/org/${org.slug}`] = {
        page: '/org/[slug]',
        query: { slug: org.slug },
      }
    })
    return paths
  },
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
