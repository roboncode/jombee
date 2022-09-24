import { Container } from "./core/container"
import Footer from "./app/footer"
import Header from "./app/header"

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <Container className="w-screen h-screen theme-bg-base theme-color-base">
      <Header></Header>

      <div className="flex w-full h-full">{ children }</div>
      <Footer></Footer>
    </Container>
  )
}