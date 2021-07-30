import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60%;
  margin: 20px auto;
`

export const Label = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 6px;
  color: ${(props) => props.theme.fontColor};
`

export const InputElement = styled.input`
  height: 30px;
  padding: 5px;
  background-color: ${(props) => props.theme.formBackgroundColor};
  color: ${(props) => props.theme.fontColor};

  &:-webkit-autofill {
    -webkit-text-fill-color: ${(props) => props.theme.fontColor} !important;
    -webkit-box-shadow: 0 0 0 30px ${(props) => props.theme.formBackgroundColor} inset;
  }
`

export const Error = styled.div`
  font-size: 12px;
  color: #f62854;
`