import { css, SerializedStyles } from '@emotion/react'

const desktop = (styles: string): SerializedStyles => {
  return css`
    @media (min-width: 1276px) {
      ${styles}
    }
  `
}

const tablet = (styles: string): SerializedStyles => {
  return css`
    @media (max-width: 1276px) {
      ${styles}
    }
  `
}

const mobile = (styles: string): SerializedStyles => {
  return css`
    @media (max-width: 500px) {
      ${styles}
    }
  `
}

export { desktop, tablet, mobile }
