const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

const withFonts = require('next-fonts')
const withWorkers = require('@zeit/next-workers')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const webpack = (config, { dev, isServer, defaultLoaders }) => {
  const splitChunks = config.optimization && config.optimization.splitChunks
  if (splitChunks) {
    const cacheGroups = splitChunks.cacheGroups
    const preactModules = /[\\/]node_modules[\\/](preact|preact-render-to-string|preact-context-provider)[\\/]/
    if (cacheGroups.framework) {
      cacheGroups.preact = Object.assign({}, cacheGroups.framework, {
        test: preactModules,
      })
      cacheGroups.commons.name = 'framework'
    } else {
      cacheGroups.preact = {
        name: 'commons',
        chunks: 'all',
        test: preactModules,
      }
    }
  }

  // Install webpack aliases:
  const aliases = config.resolve.alias || (config.resolve.alias = {})
  aliases.react = aliases['react-dom'] = 'preact/compat'

  // inject Preact DevTools
  if (dev && !isServer) {
    const entry = config.entry
    config.entry = () =>
      entry().then((entries) => {
        entries['main.js'] = ['preact/debug'].concat(entries['main.js'] || [])
        return entries
      })
  }

  return config
}

const config = (phase) => {
  const forceProd = false
  const isDev = forceProd ? false : phase === PHASE_DEVELOPMENT_SERVER
  console.log('isDev: ', isDev)

  // get env variable
  const env = {
    ghostURL: process.env.GHOST_URL,
    ghostKey: process.env.GHOST_KEY,
  }
  return {
    env,
    reactStrictMode: true,
    experimental: {
      modern: true,
    },
    webpack: !isDev ? webpack : undefined,
  }
}

module.exports = (phase) => withWorkers(withBundleAnalyzer(withFonts(config(phase))))
