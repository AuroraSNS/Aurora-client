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
  }
`;

export default Global;
