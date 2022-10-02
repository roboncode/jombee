import { GreetingContext, Hello } from "../components/Hello"
import { useContext, useMemo, useState } from "react"

import { Outlet } from "react-router-dom"

// export const EnglishContext = createContext({message: ''})
// export const GreetingContext = createContext({message: ''})

function About() {

  // firstName state
  const [firstName, setFirstName] = useState('Rob')
  // lastName state
  const [lastName, setLastName] = useState('Taylor')
  // fullName memo
  const displayName = useMemo(() => `${firstName} ${lastName}`, [firstName, lastName])

  // const { message } = useContext(GreetingContext)

  return (
    <div className="sl-theme-dark">
      <h1>About</h1>
      <p>This is the about page</p>
      <p onClick={() => setFirstName('Robert')}>{displayName}</p>

      <GreetingContext.Consumer>
        {({ message }) => <Hello greeting={message} />}
      </GreetingContext.Consumer>

      <GreetingContext.Provider value={{ message: 'Hello' }}>
        <GreetingContext.Consumer>
          {({ message }) => <Hello greeting={message} />}
        </GreetingContext.Consumer>
      </GreetingContext.Provider>
      
      <GreetingContext.Provider value={{ message: 'Hola' }}>
        <GreetingContext.Consumer>
          {({ message }) => <Hello greeting={message} />}
        </GreetingContext.Consumer>
      </GreetingContext.Provider>

      <Outlet />
    </div>
  )
}

export default About