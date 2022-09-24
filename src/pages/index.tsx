import { Container } from '../components/core/container'
import Content from '../components/core/content'
import Footer from '../components/app/footer'
import Head from 'next/head'
import Header from '../components/app/header'
import Image from 'next/image'
import Layout from '../components/layout'
import type { NextPage } from 'next'
import { NextPageWithLayout } from './_app'
import { Todo } from '../components/core/todo'
import styles from '../styles/Home.module.css'

const generateTodos = () => {
  const total = 100
  const todos = []
  for (let i = 0; i < total; i++) {
    todos.push(<Todo key={i}>This is a todo</Todo>)
  }
  return todos
}

const Page: NextPageWithLayout = () => {
  return (
    <Content>
      <Container className="w-full h-full bg-base color-base">{generateTodos()}</Container>
      <Container className="w-full h-full bg-base color-base">{generateTodos()}</Container>
      <Container className="w-full h-full bg-base color-base">{generateTodos()}</Container>
    </Content>
  )
}
Page.getLayout = (page: React.ReactNode) => {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Page
