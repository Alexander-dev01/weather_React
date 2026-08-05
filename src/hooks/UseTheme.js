import { useEffect, useState } from "react"

const UseTheme = () => {

  const [theme, setTheme] = useState(() => {
    return JSON.parse(localStorage.getItem('themeWeather')) ?? false
  }
  )

  useEffect(() => {
    console.log('темная тема?', theme);
    changeSaveTheme()
  }, [theme])

  const changeSaveTheme = () => {
    document.body.classList.toggle('dark', theme)
    localStorage.setItem('themeWeather', JSON.stringify(theme))
  }

  const onClickTheme = () => {
    setTheme(!theme)
  }

  return { onClickTheme }
}

export default UseTheme

