import { css } from '@emotion/react'

export const global = css`
  @font-face {
    font-family: 'Roboto Slab';
    src: url('/fonts/RobotoSlab-Variable.woff2') format('woff2 supports variations'),
      url('/fonts/RobotoSlab-Variable.woff2') format('woff2-variations');
    font-weight: 100 1000;
    font-stretch: 25% 151%;
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --bg: #fff;
    --bgContrast: #1b1d24;
    --separator: var(--text);

    --primary: #3498db;
    --primaryText: #67cbff;
    --text: #2a2d38;
    --textOnContrast: #ccc;
    --header: #1b1d24;
    --headerOnContrast: #fff;

    --red: #e06c75;
    --red-alt: #8c4349;

    --purple: #c678dd;
    --purple-alt: #9f60b3;

    --cyan: #56b6c2;

    --orange: #e08d6c;

    --lime: #a9c379;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --bg: #1b1d24;
      --bgContrast: #23252c;
      --separator: #fff;

      --text: #ddd;
      --textOnContrast: var(--text);
      --header: #fff;
      --headerOnContrast: var(--headerOnContrast);
    }
  }

  body {
    background-color: var(--bg);
    color: var(--text);
  }
`
