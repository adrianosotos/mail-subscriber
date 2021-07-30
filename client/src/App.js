import { useState } from 'react'
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import { GlobalStyles } from './styles/globalStyles'
import ThemeStore, { useTheme } from './context/theme'
import Theme from './components/Theme/Theme'

function App() {
  const [showSuccess, setShowSuccess] = useState(false)
  const { isDarkTheme } = useTheme()

  function handleShowSuccess () {
    setShowSuccess(true)

    setTimeout(() => setShowSuccess(false), 3000)
  }
  return (
    <div>
      <ThemeStore>
        <Theme>
          
            <GlobalStyles />
            <Header />
            {
              showSuccess ? (<div>Usuário enviado com sucesso</div>) : null
            }
            <Form handleShowSuccess={handleShowSuccess} />
        </Theme>
      </ThemeStore>
    </div>
  );
}

export default App;
