import { ClipboardEvent, FormEvent, KeyboardEvent, MouseEvent, useEffect, useState } from 'react'

import Prism from 'prismjs'

type Props = {
  editable?: boolean
  content?: string
}

export const CodeViewer = ({ editable, content }: Props) => {
  const keyDownHandler = (evt: KeyboardEvent<HTMLElement>) => {}
  const cutHandler = (evt: ClipboardEvent<HTMLInputElement>) => {}
  const pasteHandler = (evt: ClipboardEvent<HTMLInputElement>) => {}
  const clickHandler = (evt: MouseEvent<HTMLPreElement>) => {}
  const textInputHandler = (evt: FormEvent<HTMLTextAreaElement>) => {}

  const decorateModels = (html: string) => {
    const ignoreClassList = ['String', 'Boolean', 'Int', 'BigInt', 'Float', 'DateTime', 'Json', 'Cascade']
    // convert html string to DOM
    const parser = new DOMParser()
    const doc = parser.parseFromString(html, 'text/html')
    doc.querySelectorAll('.class-name').forEach((el: any) => {
      if (ignoreClassList.includes(el.innerText)) {
        return
      }
      // if (editable) {
      //   el.classList.add('clickable')
      // } else {
      el.classList.add('model')
      // }
    })
    return doc.body.innerHTML
  }

  const highlight = (content?: string | object) => {
    let hiContent = ''
    if(content) {
      if (typeof content !== 'string') {
        content = JSON.stringify(content, null, 2)
      }
      hiContent = Prism.highlight(content, Prism.languages['java'], 'java')
      hiContent = decorateModels(hiContent)
    }
    return hiContent
  }

  useEffect(() => {
    highlight(content)
  }, [content])

  const editor = (
    <pre
      className={'editor text-xs ring-0 p-4 w-full h-full ' + { hidden: !content }}
      onKeyDown={keyDownHandler}
      onCut={cutHandler}
      onPaste={pasteHandler}
      onClick={clickHandler}
    >
      <code
        contentEditable={editable} suppressContentEditableWarning={true}
        spellCheck="false"
        className="border-none focus:ring-0 focus:ring-offset-0 focus:outline-none min-w-full min-h-full"
        dangerouslySetInnerHTML={{__html: highlight(content)}}
      ></code>
    </pre>
  )

  const input = 
    <textarea
      className="w-full h-full bg-transparent p-4 text-sm color-base outline-none resize-none"
      placeholder="Paste your code here..."
      onInput={textInputHandler}
      value={content}
    ></textarea>

  const child = content ? editor : input

  return (
    <div className={'w-full h-full ' + { editor: editable }}>
      {child}
    </div>
  )
}
