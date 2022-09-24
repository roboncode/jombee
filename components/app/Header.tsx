import { ToggleDarkModeButton } from "../core/ToggleDarkModeButton"

export default function Header() {
  return <header className="flex">
    <div className="flex items-center gap-4 p-2">
      <h1 className="text-2xl">Jombee</h1>
    </div>
    <div className="flex-grow"></div>
    <ToggleDarkModeButton />
  </header>
}
