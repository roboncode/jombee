import { ToggleDarkModeButton } from "../core/ToggleDarkModeButton"

export default function Header() {
  return <header className="flex">
    <div className="flex items-center gap-4">
      <h1 className="text-2xl font-bold">Next.js + Tailwind CSS</h1>
    </div>
    <div className="flex-grow"></div>
    <ToggleDarkModeButton />
  </header>
}
