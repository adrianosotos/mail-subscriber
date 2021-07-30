import { useState } from 'react'
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import { GlobalStyles, SuccessFeedback } from './styles/globalStyles'
import ThemeStore from './context/theme'
import Theme from './components/Theme/Theme'

function App() {
  const [showSuccess, setShowSuccess] = useState(false)

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
              showSuccess ? (<SuccessFeedback>Usuário enviado com sucesso</SuccessFeedback >) : null
            }
            <Form handleShowSuccess={handleShowSuccess} />
        </Theme>
      </ThemeStore>
    </div>
  );
}

export default App;
