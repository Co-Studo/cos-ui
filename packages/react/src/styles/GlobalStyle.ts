import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

const cosStyle = css`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; // 10px
    // 참고: https://github.com/Co-Studo/Co-Studo-front/discussions/53
  }

  body {
    background-color: ${({ theme }) => theme.palette.bgColor};
    color: ${({ theme }) => theme.palette.fontColor};
    font-size: 1.6rem;
    font-weight: 400;
    font-family: 'Noto Sans KR', sans-serif;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: -0.4px;
  }

  button {
    margin: 0;
    padding: 0;
    border: none;
    background-color: inherit;
    border-radius: inherit;
    cursor: pointer;
  }

  input {
    margin: 0;
    padding: 0;
    border: none;
    border-radius: inherit;
    :focus-visible{
      outline: none;
    }
  }

  textarea {
    max-width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    border: none;
    background-color: inherit;
    border-radius: inherit;
    color: inherit;
    :focus-visible{
      outline:none;
    }
  }

  a {
    font: inherit;
    color: inherit;
    text-decoration: none;
  }
`;

export const CosStyle = createGlobalStyle`${cosStyle}`

export default cosStyle;
