import { Container } from '../components/core/Container'
import Footer from '../components/app/Footer'
import Head from 'next/head'
import Header from '../components/app/Header'
import Image from 'next/image'
import type { NextPage } from 'next'
import { Todo } from '../components/core/Todo'
import styles from '../styles/Home.module.css'

const generateTodos = () => {
  const total = 100
  const todos = []
  for (let i = 0; i < total; i++) {
    todos.push(<Todo key={i}>This is a todo</Todo>)
  }
  return todos
}

const Home: NextPage = () => {
  return (
    <Container className="w-screen h-screen theme-bg-base theme-color-base">
      <Header></Header>

      <div className="flex w-full h-full">
        <Container className="w-full h-full bg-base color-base">{generateTodos()}</Container>

        <Container className="w-full h-full bg-base color-base">{generateTodos()}</Container>

        <Container className="w-full h-full bg-base color-base">{generateTodos()}</Container>
      </div>
      <Footer></Footer>
    </Container>
  )
}

export default Home
