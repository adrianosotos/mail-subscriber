import useForm from '../../hooks/useForm'
import Input from '../Input/Input'
import { Container, Button } from './style'

function Form ({ handleShowSuccess, handleShowError }) {
  const data = {
    name: '',
    email: '',
    phone: '',
    password: '',
    passwordConfirmation: ''
  }

  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit
  } = useForm(data, 'http://localhost:5000/senwd', handleFeedback)

  function handleFeedback (response) {
    if (response === 'fail') {
      return handleShowError()
    }

    return handleShowSuccess()
  }

  return (
    <Container>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Input 
          label={'Nome'} 
          onChange={handleChange}
          onBlur={handleBlur}
          name={'name'}
          type={'text'}
          value={values.name || ''}
          error={errors.name}
        />

        <Input 
          label={'Email'} 
          onChange={handleChange}
          onBlur={handleBlur}
          name={'email'}
          type={'text'}
          value={values.email || ''}
          error={errors.email}
        />

        <Input 
          label={'Telefone'} 
          onChange={handleChange}
          onBlur={handleBlur}
          name={'phone'}
          type={'text'}
          value={values.phone || ''}
          error={errors.phone}
        />

        <Input 
          label={'Senha'} 
          onChange={handleChange}
          onBlur={handleBlur}
          name={'password'}
          type={'password'}
          value={values.password || ''}
          error={errors.password}
        />

        <Input 
          label={'Confirmar senha'} 
          onChange={handleChange}
          onBlur={handleBlur}
          name={'passwordConfirmation'}
          type={'password'}
          value={values.passwordConfirmation || ''}
          error={errors.passwordConfirmation}
        />

        <Button type="submit" />
      </form>
    </Container>
  )
}

export default Form
