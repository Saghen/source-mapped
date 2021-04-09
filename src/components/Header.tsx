import React from 'react'
import { css } from '@emotion/react'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { spacing, typography } from '@styles/theme'
import Separator from './Separator'
import ArrowLeft from './icons/ArrowLeft'
import Title from './icons/Title'

const HeaderStyles = css`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  height: 48px;
  justify-content: center;
  padding: ${spacing.normal};
  will-change: height;
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

const HomeHeaderStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
  justify-content: flex-end;
  padding: ${spacing.normal};
  will-change: height;
  > h1 {
    margin-bottom: 24px;
    width: 100%;
    max-width: 400px;
  }
`

export default function Header() {
  const router = useRouter()
  const home = router.asPath === '/'

  if (home)
    return (
      <header css={HomeHeaderStyles}>
        <h1>
          <Title />
        </h1>
        <Separator />
      </header>
    )
  return (
    <header css={HeaderStyles}>
      <Link href="/">
        <a>
          <ArrowLeft />
          <span>Back to Home</span>
        </a>
      </Link>
    </header>
  )
}
