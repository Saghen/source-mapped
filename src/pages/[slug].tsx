import React from 'react'
import ArticlePage from '@components/ArticlePage'
import { getPost, getPosts } from '@lib/posts'
import { PostOrPage } from '@tryghost/content-api'
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from 'next'
import Head from 'next/head'
import { prismifyHTML } from '@lib/pre'
import ArticleHeader from '@components/ArticleHeader'

export default function Slug({ post }: { post: PostOrPage }) {
  return (
    <div>
      <Head>
        <title key="title-tag">{post.title}</title>
        <meta name="title" content={post.title} key="title" />
        <meta name="description" content={post.excerpt} key="description" />
        <meta name="author" content={post.authors.map((author) => author.name).join(', ')} />
        <meta name="date" content={post.created_at} />
        <meta name="keywords" content={post.tags.map((tag) => tag.name).join(', ')} />
        <meta property="og:type" content="article" key="og:type" />
      </Head>
      <ArticleHeader />
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

  const prismed = prismifyHTML(post.html)

  post.html = prismed

  return {
    props: {
      post,
    },
    revalidate: 20,
  }
}
