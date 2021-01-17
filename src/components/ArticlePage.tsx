import { PostOrPage } from '@tryghost/content-api'
import Content from './Content'
import { css } from '@emotion/react'
import { flexCenter } from '@styles/common'
import { colors, spacing, typography } from '@styles/theme'
import { getFormattedDate } from 'utils'

const ArticlePageStyles = css`
  ${flexCenter};
  flex-direction: column;
  padding: ${spacing.normal};
  article {
    > header {
      ${flexCenter};
      flex-direction: column;
      font-family: ${typography.serif};
      h1 {
        font-size: ${typography.h1};

        margin: ${spacing.small} 0;
      }
      span {
        font-size: ${typography.body};
        display: flex;
        address {
          font-style: normal;
        }
      }
      hr {
        min-width: 150px;
        width: 25%;
        margin: ${spacing.normal} 0;
        outline: none;
        border: 1px solid ${colors.onBgLight};
      }
    }
  }
`

type ArticlePageProps = {
  post: PostOrPage
}

export default function ArticlePage({ post }: ArticlePageProps): JSX.Element {
  return (
    <div css={ArticlePageStyles}>
      <article>
        <header>
          <h1>{post.title}</h1>
          <span>
            <address className="author">{post.primary_author?.name}</address>&nbsp;on&nbsp;
            <time dateTime={post.published_at}>{getFormattedDate(post.published_at)}</time>
          </span>
          <hr />
        </header>
        <section>
          <Content content={post.html} />
        </section>
      </article>
    </div>
  )
}
