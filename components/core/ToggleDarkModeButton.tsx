import { Icon } from '@iconify/react'
import { useEffect } from 'react'
import { useLocalStorageState } from 'ahooks'

export const ToggleDarkModeButton = () => {
  const [isDark, setDarkMode] = useLocalStorageState<boolean>('dark-mode', {
    defaultValue: false,
  })

  useEffect(() => {
    const htmlEl = document.getElementsByTagName('html')[0]
    if(isDark) htmlEl.classList.add('dark')
    else htmlEl.classList.remove('dark')
  }, [isDark])

  return (
    <button className="btn btn-icon" onClick={() => setDarkMode(!isDark)}>
      <Icon icon={isDark ? 'tabler-moon' : 'tabler-sun'}></Icon>
    </button>
  )
}
