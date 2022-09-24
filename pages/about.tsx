import Content from "../components/core/content"
import Layout from "../components/layout"

function About() {
  return (
    <Content className="justify-center items-center">
      <h1 className="text-4xl">Hello, world!</h1>
    </Content>
  )
}

About.getLayout = (page: React.ReactNode) => {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default About