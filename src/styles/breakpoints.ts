import { css, SerializedStyles } from '@emotion/core'


const desktop = (styles: SerializedStyles): SerializedStyles => {
    return css`@media (min-width: 1276px) {
        ${styles}
    }`
}

const tablet = (styles: SerializedStyles): SerializedStyles => {
    return css`@media (max-width: 1276px) {
        ${styles}
    }`
}

const mobile = (styles: SerializedStyles): SerializedStyles => {
    return css`@media (max-width: 500px) {
        ${styles}
    }`
}

export {
    desktop,
    tablet,
    mobile
}

