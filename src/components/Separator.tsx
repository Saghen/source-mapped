import { css } from '@emotion/react'
import { colors } from '@styles/theme'

const SeparatorStyles = (props: SeparatorProps) => css`
  width: ${props.width ?? '150px'};
  height: 2px;
  background: ${colors.onBgLight};
  ${props.margin && `margin: ${props.margin}`}
`

type SeparatorProps = {
  width?: string
  margin?: string
}

export default function Separator(props: SeparatorProps) {
  return <div css={SeparatorStyles(props)} />
}
