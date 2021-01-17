import type { PostOrPage, PostsOrPages } from '@tryghost/content-api'
import { api } from './api'

export async function getPosts(): Promise<PostsOrPages> {
  return api.posts.browse({
    limit: 'all',
    include: ['tags', 'authors'],
  })
}

export async function getPost(postSlug): Promise<PostOrPage> {
  return api.posts.read(
    {
      slug: postSlug,
    },
    {
      formats: ['html'],
      include: ['tags', 'authors'],
    }
  )
}
