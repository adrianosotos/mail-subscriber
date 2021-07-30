import { useState } from 'react'
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import { GlobalStyles, SuccessFeedback, ErrorFeedback } from './styles/globalStyles'
import ThemeStore from './context/theme'
import Theme from './components/Theme/Theme'

function App() {
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)

  function handleShowSuccess () {
    setShowSuccess(true)

    setTimeout(() => setShowSuccess(false), 3000)
  }

  function handleShowError () {
    setShowError(true)

    setTimeout(() => setShowError(false), 3000)
  }

  function handleSuccessMessage () {
    if (!showSuccess) {
      return null
    }

    return (<SuccessFeedback>Usuário enviado com sucesso</SuccessFeedback >)
  }

  function handleErrorMessage () {
    if (!showError) {
      return null
    }

    return (<ErrorFeedback>Falha ao enviar usuário</ErrorFeedback>)
  }

  return (
    <div>
      <ThemeStore>
        <Theme>
          
            <GlobalStyles />
            <Header />
            {handleSuccessMessage()}
            {handleErrorMessage()}
            <Form 
              handleShowSuccess={handleShowSuccess}
              handleShowError={handleShowError}
            />
        </Theme>
      </ThemeStore>
    </div>
  );
}

export default App;
