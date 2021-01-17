import GhostContentAPI from '@tryghost/content-api'
import config from '@config'

export const api = new GhostContentAPI({
  url: config.get('api').url,
  key: config.get('api').contentKey,
  version: 'v3',
})

