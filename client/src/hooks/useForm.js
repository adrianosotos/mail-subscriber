import { useState } from 'react'
import axios from 'axios'

function useForm (dataStruct, submitUrl, feedback) {
  const [values, setValues] = useState(dataStruct);
  const [errors, setErrors] = useState(dataStruct);
    
  function handleBlur (e) {
    const { name, value } = e.target
    
    if (name === 'password' && value && value.length <= 4) {
      return setErrors({
        ...errors,
        [name]: 'Senha deve ter no mínimo 5 caractéres'
      })
    }

    
    if (name === 'passwordConfirmation' && value !== values.password) {
      return setErrors({
        ...errors,
        [name]: 'Senhas divergentes'
      })
    }
    
    if (value) {
      return setErrors({
        ...errors,
        [name]: ''
      })
    }

    return setErrors({
      ...errors,
      [name]: 'Preenchimento obrigatorio'
    })
  }

  function handleChange (e) {
      const { name, value } = e.target
      let _value = value

      setValues({
        ...values,
        [name]: _value
      })
  }

  function hasEmptyData () {
    return Object.values(values).some(data => !data)
  }

  function hasErrors () {
    return Object.values(errors).some(error => error)
  }

  function getEmpty (userData) {
    return Object.keys(userData).reduce((obj, data) => {
      if (!values[data]) {
          obj[data] = `Preenchimento obrigatorio`
      }
      return obj
    }, {}) 
  }

  function getEmptyFields () {
    setErrors({
        ...errors,
        ...getEmpty(values)
    })
  }

  function resetInputs () {
    setValues(dataStruct)
    setErrors(dataStruct)
  }

  function handleSubmit (e) {
    e.preventDefault()

    getEmptyFields()

    if (hasEmptyData() || hasErrors()) {
        return alert(`Corrija os campos destacados`)
    }

    axios.post(submitUrl, {
        ...values
    })
    .then(function (response) {
      resetInputs()
      feedback('success')
    })
    .catch(function (error) {
      feedback('fail')
      console.log(error);
    });
  }

  return {
      handleChange,
      handleSubmit,
      handleBlur,
      setValues,
      values,
      errors
    }
}

export default useForm
