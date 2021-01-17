import React from 'react'
import { css } from '@emotion/react'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { colors, spacing, typography } from '@styles/theme'
import { mobile } from '@styles/breakpoints'
import Separator from './Separator'
import ArrowLeft from './icons/ArrowLeft'
import Title from './icons/Title'

const HeaderStyles = (home: boolean) => css`
  display: flex;
  flex-direction: column;
  align-items: ${home ? 'center' : 'space-between'};
  height: ${home ? '200px' : 'auto'};
  justify-content: ${home ? 'flex-end' : 'center'};
  padding: ${spacing.normal};
  > h1 {
    margin-bottom: 24px;
  }
  > a {
    & > * + * {
      margin-left: 4px;
    }
    display: flex;
    align-items: center;
    font-family: ${typography.serif};
    text-decoration: none;
    color: ${colors.onBgLight};
  }
  ${mobile(`
        height: ${home ? '125px' : 'auto'};
        > h1 {
            font-size: ${home ? '48px' : '24px'} ;
        }
    `)}
`

type HeaderProps = {
  title: string
}

export default function Header({ title }: HeaderProps) {
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
