import { PostOrPage } from '@tryghost/content-api'
import Content from './Content'
import { css } from '@emotion/react'
import { flexCenter } from '@styles/common'
import { spacing, typography } from '@styles/theme'
import { getFormattedDate } from 'utils'
import Separator from './Separator'

const ArticlePageStyles = css`
  ${flexCenter};
  flex-direction: column;
  padding: ${spacing.normal};
  line-height: 1.6;
  article {
    > header {
      ${flexCenter};
      flex-direction: column;
      font-family: ${typography.serif};
      h1 {
        font-size: ${typography.h1};
        text-align: center;

        margin: ${spacing.small} 0;
      }
      span {
        font-size: ${typography.body};
        text-align: center;
        address {
          font-style: normal;
          display: inline;
        }
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
          <Separator margin="24px 0 0 0" />
        </header>
        <section>
          <Content content={post.html} />
        </section>
      </article>
    </div>
  )
}
