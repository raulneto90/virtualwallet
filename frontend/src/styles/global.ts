import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #F6F7F9;
  }

  body, input, button {
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
