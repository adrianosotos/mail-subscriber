import { Container, Label, InputElement, Error } from './style'

function Input ({ label, onChange, onBlur, name, type, value, error}) {
  return (
    <Container>
      <Label>{label}</Label>
      <InputElement 
          onChange={(e) => onChange(e)}
          onBlur={e => onBlur(e)}
          name={name}
          type={type}
          value={value}
      />
      <Error>{error}</Error>
    </Container>
  )
}

export default Input
