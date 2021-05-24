import { css } from '@emotion/react'
import { spacing } from '@styles/theme'
import Separator from './Separator'
import Title from './icons/Title'

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
  return (
    <header css={HomeHeaderStyles}>
      <h1 aria-label="Source Mapped">
        <Title />
      </h1>
      <Separator />
    </header>
  )
}
