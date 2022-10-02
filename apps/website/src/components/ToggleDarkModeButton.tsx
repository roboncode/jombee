import { useEffect } from 'react'
import { useLocalStorageState } from 'ahooks'

export const ToggleDarkModeButton = () => {
  const [theme, setTheme] = useLocalStorageState<string>('theme', {
    defaultValue: 'light',
  })

  useEffect(() => {
    const htmlEl = document.getElementsByTagName('html')[0]
    if (theme === 'dark') htmlEl.classList.add('dark')
    else htmlEl.classList.remove('dark')
  }, [theme])

  const toggleTheme = () => {
    if (theme === 'dark') setTheme('light')
    else setTheme('dark')
  }

  return (
    <button className="btn btn-icon" onClick={toggleTheme}>
      <span className={theme === 'dark' ? 'i-tabler-moon' : 'i-tabler-sun'}></span>
    </button>
  )
}
