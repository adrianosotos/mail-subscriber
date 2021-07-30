import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background: teal;
    background-color: ${(props) => props.theme.background};
    letter-spacing: 0.5px;
  }
  html, body {
    height: 100%;
  }
`

export const SuccessFeedback = styled.div`
  position: fixed;
  background-color: #3cba92;
  color: #ffffff;
  font-weight: 600;
  width: fit-content;
  padding: 10px;
  margin: auto;
  top: 0;
  right: 25%;
  left: 25%;
  box-shadow: 1px 0px 20px -5px rgba(0,0,0,0.69);
`
