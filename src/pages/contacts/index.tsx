import Layout from "../../components/layout"

type Props = {
  children: React.ReactNode,
  className?: string,
}

function Contacts({children, className}: Props) {
  return (
    <div>
      <h1>Contacts</h1>
      <p>Here you can find our contacts.</p>
      {children}
    </div>
  );
}

Contacts.getLayout = (page: React.ReactNode) => {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Contacts
