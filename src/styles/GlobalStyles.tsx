import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Montserrat";
    src url("../assets/fonts/Montserrat/static/Montserrat-Bold.ttf");
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
  }

  body {
    font-family: "Montserrat", sans-serif;
  }
`;
