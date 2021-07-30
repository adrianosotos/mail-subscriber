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
  color: ${(props) => props.theme.fontColor}
`

export const InputElement = styled.input`
  height: 30px;
  padding: 5px;
`

export const Error = styled.div`
  font-size: 12px;
  color: #f62854;
`