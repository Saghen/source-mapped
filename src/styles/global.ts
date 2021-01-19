import { css } from '@emotion/react'

export const global = css`
  @font-face {
    font-family: 'Roboto Slab';
    src: url('/fonts/RobotoSlab-Variable.woff2') format('woff2 supports variations'),
      url('/fonts/RobotoSlab-Variable.woff2') format('woff2-variations');
    font-weight: 100 1000;
    font-stretch: 25% 151%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
