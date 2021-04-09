import React from 'react'
import { css } from '@emotion/react'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { spacing, typography } from '@styles/theme'
import Separator from './Separator'
import ArrowLeft from './icons/ArrowLeft'
import Title from './icons/Title'

const HeaderStyles = (home: boolean) => css`
  display: flex;
  flex-direction: column;
  align-items: ${home ? 'center' : 'space-between'};
  height: ${home ? '200px' : '48px'};
  justify-content: ${home ? 'flex-end' : 'center'};
  padding: ${spacing.normal};
  will-change: height;
  > h1 {
    margin-bottom: 24px;
    width: 100%;
    max-width: 400px;
  }
  > a {
    & > * + * {
      margin-left: 4px;
    }
    > svg {
      margin-top: 2px; // Fixes slight optical alignment issue
    }
    display: flex;
    align-items: center;
    font-family: ${typography.serif};
    text-decoration: none;
    color: var(--text);
  }
`

export default function Header() {
  const router = useRouter()
  const home = router.asPath === '/'
  return (
    <header css={HeaderStyles(home)}>
      {!home && (
        <Link href="/">
          <a>
            <ArrowLeft />
            <span>Back to Home</span>
          </a>
        </Link>
      )}
      {/* eslint-enable */}
      {home && (
        <>
          <h1>
            <Title />
          </h1>
          <Separator />
        </>
      )}
    </header>
  )
}
