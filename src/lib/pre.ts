import { parse } from 'node-html-parser'
import Prism from 'prismjs'
import he from 'he'

// refactor this later
export const prismifyHTML = (html: string): string => {
  const root = parse(html)

  const preElements = root.querySelectorAll('pre')

  for (let pre of preElements) {
    const code = parse(pre.childNodes[0].rawText).querySelector('code')
    const lang = code.classNames.find((elem) => elem.startsWith('language'))?.split('-')[1]
    if (lang) {
      const prismed = Prism.highlight(he.decode(code.innerText), Prism.languages[lang], lang)
      code.set_content(prismed)
      pre.set_content(code)
      pre.setAttribute('class', `language-${lang}`)
    }
  }

  return root.toString()
}
