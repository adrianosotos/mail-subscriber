import styled from 'styled-components'

export const Container = styled.div`
  margin: auto;
  max-width: 660px;
  box-shadow: 1px 0px 20px -5px rgba(0,0,0,0.69);
  padding: 20px;
  background-color: ${(props) => props.theme.form};
  border-radius: 20px;
`

export const Button = styled.input`
  height: 40px;
  background-color: #5b127d;
  color: #ffffff;
  width: 60%;
  display: block;
  border: none;
  font-weight: 600;
  margin: 40px auto;
`