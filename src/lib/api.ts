import GhostContentAPI from '@tryghost/content-api'

export const api = new GhostContentAPI({
  url: process.env.ghostURL,
  key: process.env.ghostKey,
  version: 'v3',
})
