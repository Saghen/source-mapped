import React from 'react'
import ArticleCard from '@components/ArticleCard'
import Header from '@components/Header'
import '@lib/api'
import { getPosts } from '@lib/posts'
import type { PostsOrPages } from '@tryghost/content-api'
import type { GetStaticProps } from 'next'

type IndexProps = {
  posts: PostsOrPages
}

export default function index({ posts }: IndexProps) {
  return (
    <div>
      <Header />
      <main>
        {posts.map((post, idx) => (
          <ArticleCard key={post.id} post={post} alternate={(idx + 1) % 2 == 0} />
        ))}
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts()

  return {
    props: {
      posts,
    },
    revalidate: 10,
  }
}
