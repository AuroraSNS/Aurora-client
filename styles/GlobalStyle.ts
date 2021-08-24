import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const Global = createGlobalStyle`
  ${reset};

  * {
    box-sizing: border-box;
    letter-spacing: -0.005em;
    color: #151d26;
  }
  body{
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    &::-webkit-scrollbar {
        width: 6px; /*스크롤바의 너비*/
    }
    &::-webkit-scrollbar-thumb {
      /* 스크롤바 */
      background-color: #f0f2f5;
      /* background-clip: padding-box;
      border: 1px solid transparent; */
      border-radius: 20px;
    }
    &::-webkit-scrollbar-track {
      /* 스크롤바 바탕 */
      background-color: transparent;
    }
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  button,input,textarea{
    background-color: transparent;
    border: none;
    outline: none;
  }
  a,button{
    cursor: pointer;
  }
  ul{
    list-style: none;
  }
  @media only screen and (max-width: 768px) {
    body {
      font-size: 12px;
    }
  }

  @media only screen and (max-width: 576px) {
    body {
      font-size: 10px;
    }
  }

  svg#not-favorite:hover, svg#favorite:hover {
    will-change: transform;
    animation: hearthBeat 1s linear infinite;
  }
  .overlay {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: transparent;
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
  .inner {
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
}
`;

export default Global;
