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
  button,svg[id],a {
    cursor: pointer;
  }
  ul{
    padding-inline-start: 0;
    margin-block-start: 0;
    margin-block-end: 0;
  }
  svg#not-favorite:hover, svg#favorite:hover {
    will-change: transform;
    animation: hearthBeat 1s linear infinite;
  }

  @keyframes hearthBeat {
    0% {
        transform: none;
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: none;
    }
}

  body::-webkit-scrollbar {
        width: 6px; /*스크롤바의 너비*/
    }

    body::-webkit-scrollbar-thumb {
        /* 스크롤바 */
        background-color: #f0f2f5;
        /* background-clip: padding-box;
        border: 1px solid transparent; */
        border-radius: 20px;
    }

    body::-webkit-scrollbar-track {
        /* 스크롤바 바탕 */
        background-color: transparent;
    }
`;

export default Global;
