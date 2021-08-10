import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  html,
  body {
  height: 100%;
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  #__next {
  height: 100%;

  }
  ul,ol{
    list-style: none;
  }
  a {
  color: inherit;
  text-decoration: none;
  }

  * {
    box-sizing: border-box;
    font-family: Inter;
    font-style: normal;
    letter-spacing: -0.005em;
  }
  button,input,textarea,input:focus,textarea:focus{
    border: none;
    outline: none;
  }
  button {
    cursor: pointer;
  }
`;

export default Global;
