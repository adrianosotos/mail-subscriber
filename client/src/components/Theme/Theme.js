import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../../styles/globalStyles'
import { lightTheme, darkTheme } from '../../styles/theme'
import { useTheme } from '../../context/theme'

function Theme ({ children }) {
  const { isDarkTheme } = useTheme()
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      { children }
    </ThemeProvider>
  )
}

export default Theme
