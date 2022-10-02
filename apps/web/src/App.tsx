import './App.css'
import '@shoelace-style/shoelace/dist/themes/light.css'
import '@shoelace-style/shoelace/dist/themes/dark.css'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Suspense, lazy, useState } from 'react'

import Anime from './pages/anime'
import Child from './pages/child'
import { Hello } from './components/Hello'
import Test from './pages/test'
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path'

const Home = lazy(() => import('./pages/home'))
const About = lazy(() => import('./pages/about'))

setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.83/dist/')

function App() {
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
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path=":id" element={<Child />} />
          </Route>
          <Route path="/test" element={<Test />} />
          <Route path="/anime" element={<Anime />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
