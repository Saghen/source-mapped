import React from 'react'
import { css, SerializedStyles } from '@emotion/react'
import type { PostOrPage } from '@tryghost/content-api'
import { flexCenter } from '@styles/common'
import { colors, spacing, typography } from '@styles/theme'
import { getFormattedDate } from 'utils'
import Link from 'next/link'
import ArrowRight from './icons/ArrowRight'
import { mobile } from '@styles/breakpoints'

// could potentially do another file for these *.styles.ts
const ArticleCardStyles = (alternate: boolean): SerializedStyles => css`
  ${flexCenter};
  margin: 0;
  padding: ${spacing.large} ${spacing.normal};
  background: ${!alternate ? colors.bgLight : colors.bgDark};
  > article {
    max-width: 700px;
    font-family: ${typography.serif};
    font-size: ${typography.body};
    color: ${!alternate ? colors.onBgLight : colors.onBgDark};
    line-height: 1.6;
    cursor: pointer;
    > header,
    section > * {
      margin-bottom: ${spacing.normal};
    }
    > header {
      span {
        color: ${!alternate ? colors.primary : colors.primaryVariant};
        text-transform: uppercase;
      }
      h2 {
        color: ${!alternate ? colors.headerLight : colors.headerDark};
      }
    }

    > footer {
      display: flex;
      justify-content: space-between;
      > div > svg {
        opacity: 0;
        transform: translateX(-32px);
        width: 32px;
        height: 32px;
        stroke-width: 2px;
        will-change: transform, opacity;
        transition: 0.45s cubic-bezier(0.075, 0.82, 0.165, 1);
      }
    }
    p {
      word-break: break-word;
    }
    &:hover {
      > footer {
        > div > svg {
          transform: translateX(0px);
          opacity: 1;
        }
      }
    }
  }
  ${mobile(`
        article > footer {
            > div > svg {
                transform: translateX(0px);
                opacity: 1;
            }
        }
    `)}
`

type ArticleCardProps = {
  post: PostOrPage
  alternate?: boolean
}

export default function ArticleCard({ post, alternate = false }: ArticleCardProps) {
  return (
    <div css={ArticleCardStyles(alternate)}>
      <Link href={post.slug}>
        <article>
          <header>
            <span>{post.primary_tag?.name}</span>
            <h2>{post.title}</h2>
          </header>
          <section>
            <p>{post.excerpt}</p>
          </section>
          <footer>
            <div>
              <address className="author">{post.primary_author?.name}</address>
              <time dateTime={post.published_at}>{getFormattedDate(post.published_at)}</time>
            </div>
            <div>
              <ArrowRight />
            </div>
          </footer>
        </article>
      </Link>
    </div>
  )
}
