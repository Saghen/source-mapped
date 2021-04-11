import { css } from '@emotion/react'
import { spacing, typography } from '@styles/theme'

const ContentStyles = css`
  max-width: 700px;
  font-family: ${typography.serif};
  color: var(--text);
  line-height: 1.6;
  font-size: ${typography.body};
  > * {
    margin: ${spacing.normal} ${spacing.small};
  }
  img {
    width: 100%;
    height: auto;
  }
  pre[class*='language-'],
  code[class*='language-'] {
    color: #e06c75;
    font-size: 13px;
    text-shadow: none;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    line-height: 1.5;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }
  pre[class*='language-']::selection,
  code[class*='language-']::selection,
  pre[class*='language-']::mozselection,
  code[class*='language-']::mozselection {
    text-shadow: none;
    background: #67cbff;
  }
  @media print {
    pre[class*='language-'],
    code[class*='language-'] {
      text-shadow: none;
    }
  }
  pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
    background: var(--bgContrast);
    max-width: calc(100vw - 1rem);
    overflow-x: auto;
  }
  :not(pre) > code[class*='language-'] {
    padding: 0.1em 0.3em;
    border-radius: 0.3em;
    color: #db4c69;
    background: #f9f2f4;
  }
  /*********************************************************
* Tokens
*/
  .namespace {
    opacity: 0.7;
  }
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #67cbff;
  }
  .token.punctuation {
    color: #999999;
  }
  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #e5c07b;
  }
  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #98c379;
  }
  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: #cccccc;
    background: var(--bgContrast);
  }
  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: #c678dd;
  }
  .token.function {
    color: #67cbff;
  }
  .token.regex,
  .token.important,
  .token.variable {
    color: #56b6c2;
  }
  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }
  .token.entity {
    cursor: help;
  }
  /*********************************************************
* Line highlighting
*/
  pre[data-line] {
    position: relative;
  }
  pre[class*='language-'] > code[class*='language-'] {
    position: relative;
    z-index: 1;
  }
  .line-highlight {
    position: absolute;
    left: 0;
    right: 0;
    padding: inherit 0;
    margin-top: 1em;
    background: #2e3038;
    box-shadow: inset 5px 0 0 #2e3038;
    z-index: 0;
    pointer-events: none;
    line-height: inherit;
    white-space: pre;
  }

  /**
  * Links
  */
  a {
    color: var(--primary);
  }

  a:visited {
    color: var(--purple);
  }
`

type ContentProps = {
  content: string
}

export default function Content({ content }: ContentProps): JSX.Element {
  return <div css={ContentStyles} dangerouslySetInnerHTML={{ __html: content }} />
}
