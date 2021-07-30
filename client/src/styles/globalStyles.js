import { createGlobalStyle } from 'styled-components';

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
