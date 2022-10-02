import '@shoelace-style/shoelace/dist/themes/light.css'

import { CodeViewer } from '../components/CodeViewer'
import { Container } from '../components/core/Container'
import { Hello } from '../components/Hello'
import { SlSwitch } from '@shoelace-style/shoelace/dist/react'
import { ToggleDarkModeButton } from '../components/core/ToggleDarkModeButton'
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path'
import { useState } from 'react'

setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.83/dist/')

function Home() {
  const [isChecked, setCheck] = useState(false)
  const hellos = [...Array(100).keys()].map(i => <Hello key={i} name={`${i}`} />)

  const [prismaContent, setPrismaContent] = useState('')

  const useExample = async () => {
    const text = await (await fetch('/example-schema.prisma')).text()
    setPrismaContent(text)
    // input.value = (await (await fetch('http://localhost:8080/prisma')).json()).text
  }

  useExample()

  return (
    <Container className="w-screen h-screen theme-bg-base theme-color-base">
      <div className="h-row p-2">
        <span className="i-tabler-brand-prisma text-lg"></span>
        <span className="font-bold">Spectrum - Tools for Prisma</span>
        <div className="flex-grow"></div>
        <ToggleDarkModeButton />
      </div>
      <div className="flex w-full h-full">
        <Container className="w-full h-full bg-base color-base">
          <div className="sticky top-0 p-4 h-row bg-base drop-shadow-md">
            Header <span className="i-tabler-box"></span>
            <SlSwitch checked={isChecked} onSlChange={(evt: any) => setCheck(evt.currentTarget.checked)}>
              <span className="color-base">Wassup</span>
            </SlSwitch>
            <div>isChecked: {isChecked.toString()}</div>
          </div>

          <CodeViewer editable={true} content={prismaContent} />
          {/* <pre className='text-xs'>{prismaContent}</pre> */}
        </Container>
        <Container className="w-full h-full bg-base color-base">
          <div className="sticky top-0 h-row p-4 bg-base drop-shadow-md">
            Header <span className="i-tabler-box"></span>
          </div>
          {hellos}
        </Container>
      </div>
      <div className="p-2">This is a footer</div>
    </Container>
  )
}

export default Home
