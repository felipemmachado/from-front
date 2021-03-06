import { createGlobalStyle } from 'styled-components';

import githubLogo  from '../assets/fundo.png';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #F0F0F5 url(${githubLogo}) no-repeat 85% top;
    background-size: 500px;
    -webkit-font-smoothing: antialiased;
  }

  body:before {
    opacity: .2;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  #root {
    max-width:960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }
`
