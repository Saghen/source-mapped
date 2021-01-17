import { Global } from '@emotion/react'
import type { AppProps } from 'next/app'
import { global as globalStyles } from '@styles/global'
import Layout from '@components/layout'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Global styles={globalStyles} />
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp