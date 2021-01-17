import convict from 'convict'
import path from 'path'

const config = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV',
  },
  api: {
    url: {
      doc: 'The url that the API server is hosted on <-- not the port of the node server',
      type: String,
      default: 'https://sourcemapped.dev',
    },
    contentKey: {
      doc: 'Content API key from Ghost custom integration',
      type: String,
      default: '',
    },
  },
})

import activeConfigs from './activeConfigs.json'

for (const configName of activeConfigs) {
  config.loadFile(path.join(__dirname, `src/config/configs/${configName}.json`))
}

config.validate({ allowed: 'strict' })

module.exports = config
