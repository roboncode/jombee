import { Container, ToggleDarkModeButton } from "@jombee/react-ui"

import { Outlet } from "react-router-dom"

function DefautLayout () {
  return (
    <Container className="w-screen h-screen bg-base color-base">
      <div className="h-row p-2">
        <div className="flex-grow"></div>
        <ToggleDarkModeButton />
      </div>
      <div className="flex w-full h-full">
        <Outlet />
      </div>
    </Container>
  )
}

export default DefautLayout