import GhostContentAPI from '@tryghost/content-api'
import config from '@config'

const api = new GhostContentAPI({
  url: config.get('api').url,
  key: config.get('api').contentKey,
  version: 'v3',
})

export async function getPosts() {
  return api.posts.browse({
    limit: 'all',
  })
}

export async function getPost(postSlug) {
  return api.posts.read({
    slug: postSlug,
  })
}
