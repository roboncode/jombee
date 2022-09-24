import Link from "next/link"
import { ToggleDarkModeButton } from "../core/toggle-dark-mode-button"

export default function Header() {
  return <header className="flex items-center gap-4">
    <div className="flex items-center gap-4 p-2">
      <h1 className="text-2xl">Jombee</h1>
    </div>
    <Link href="/">Home</Link>
    <Link href="/contacts">Contacts</Link>
    <Link href="/dashboard">Dashboard</Link>
    <Link href="/about">About</Link>
    <div className="flex-grow"></div>
    <ToggleDarkModeButton />
  </header>
}
