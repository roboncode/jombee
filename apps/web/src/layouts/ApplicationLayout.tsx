import { Container, ToggleDarkModeButton } from "@jombee/react-ui"

import { Outlet } from "react-router-dom"

function ApplicationLayout () {
  return (
    <Container className="w-screen h-screen bg-base color-base">
      <div className="h-row p-2">
        <span className="i-tabler-brand-prisma text-lg"></span>
        <span className="font-bold">React App Template</span>
        <div className="flex-grow"></div>
        <ToggleDarkModeButton />
      </div>
      <Outlet />
    </Container>
  )
}

export default ApplicationLayout