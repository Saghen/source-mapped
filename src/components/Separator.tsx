import { css } from '@emotion/react'

const SeparatorStyles = (props: SeparatorProps) => css`
  width: ${props.width ?? '150px'};
  height: 2px;
  background: var(--separator);
  ${props.margin && `margin: ${props.margin}`}
`

type SeparatorProps = {
  width?: string
  margin?: string
}

export default function Separator(props: SeparatorProps) {
  return <div css={SeparatorStyles(props)} />
}
