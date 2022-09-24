import Contacts from '..'
import Layout from '../../../components/layout'
import { useRouter } from 'next/router'

type Props = {
  children: React.ReactNode,
  className?: string,
}

function Contact({children}: Props) {
  const router = useRouter()
  const { contactId } = router.query

  return (
    <Contacts>
      <div>Contact With ID: {contactId}</div>
      { children }
    </Contacts>
  )
}

Contact.getLayout = (page: React.ReactNode) => {
  return Contacts.getLayout(page)
}

export default Contact