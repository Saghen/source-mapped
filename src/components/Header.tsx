import React from 'react'
import { css } from '@emotion/react'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { colors, spacing, typography } from '@styles/theme'
import { mobile } from '@styles/breakpoints'

const HeaderStyles = (home: boolean) => css`
  display: flex;
  justify-content: ${home ? 'center' : 'space-between'};
  height: ${home ? '200px' : 'auto'};
  align-items: ${home ? 'flex-end' : 'center'};
  padding: ${spacing.normal};
  > h1 {
    font-family: 'Alex Brush', cursive;
    font-size: ${home ? '64px' : '24px'};
  }
  > a {
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
      {/* eslint-disable */}
      {!home && (
        <Link href="/">
          <a>Back to Home</a>
        </Link>
      )}
      {/* eslint-enable */}
      {home && <h1>{title}</h1>}
    </header>
  )
}
