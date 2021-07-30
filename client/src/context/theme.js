import { createContext, useState, useContext } from 'react'

const ThemeContext = createContext()

export default function ThemeProvider ({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      { children }
    </ThemeContext.Provider>
  )
}

export function useTheme () {
  const context = useContext(ThemeContext)
  const { isDarkTheme, setIsDarkTheme } = context || {}

  return { isDarkTheme, setIsDarkTheme }
}