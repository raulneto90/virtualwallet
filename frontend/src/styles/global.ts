import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --bg: #1F1D2B;
    --card-bg: #353245;
    --button-bg: #72699F;
    --button2-bg: #7957DA;
    --white: #fff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  body {
    background: var(--bg);
  }

  body, input, button {
    font: 16px 'IBM Plex Sans', sans-serif;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;