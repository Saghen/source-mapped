import { Global } from '@emotion/react'
import type { AppProps } from 'next/app'
import { global as globalStyles } from '@styles/global'
import Head from 'next/head'
import Layout from '@components/Layout'

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title key="title-tag">Source Mapped</title>
        <meta name="title" content="Source Mapped" key="title" />
        <meta
          name="description"
          content="Blog by Liam Dyer and Aaditya Sahay. JS, TS, Rust, C and Embedded"
          key="description"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:site_name" content="Source Mapped" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#3498db" />
        <meta name="msapplication-TileColor" content="#3498db" />
        <meta name="theme-color" content="#1b1d24" />
      </Head>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
