import ArticlePage from '@components/ArticlePage'
import { getPost, getPosts } from '@lib/posts'
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from 'next'
import React from 'react'

export default function Slug({ post }) {
  return (
    <div>
      <ArticlePage post={post} />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts()
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }))
  return {
    paths: paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
  const post = await getPost(params.slug)
  return {
    props: {
      post,
    },
    revalidate: 20,
  }
}
