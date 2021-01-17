import { css } from '@emotion/react'
import { colors, spacing, typography } from '@styles/theme'

const ContentStyles = css`
  max-width: 700px;
  font-family: ${typography.serif};
  color: ${colors.onBgLight};
  line-height: 1.4;
  font-size: ${typography.body};
  * {
    margin: ${spacing.normal} 0;
  }
  img {
    width: 100%;
    height: auto;
  }
`

type ContentProps = {
  content: string
}

export default function Content({ content }: ContentProps): JSX.Element {
  return <div css={ContentStyles} dangerouslySetInnerHTML={{ __html: content }} />
}
