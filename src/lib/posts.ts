import { api } from './api';


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
