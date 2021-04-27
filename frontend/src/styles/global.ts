import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #F4F6FB;
  }

  body, input, button {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }
`;
