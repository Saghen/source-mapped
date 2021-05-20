import { css } from '@emotion/react'
import Link from 'next/link'
import { spacing, typography } from '@styles/theme'
import ArrowLeft from './icons/ArrowLeft'

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

export default function ArticleHeader() {
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
