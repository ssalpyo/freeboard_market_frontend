import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    font-family: "NotoSansKR";
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  button {
    cursor: pointer;
    border: none;
    background-color: white;
  }
  a {
    outline: none;
    color: inherit;
    text-decoration: none;
  }
  html {
    font-size: 16px;
  }
  html,
  body {
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
  }
  @font-face {
    font-family: "NotoSansKR";
    src: url("/fonts/NotoSansKR-Regular.otf");
  }
`;
