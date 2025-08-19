import styled, { createGlobalStyle } from "styled-components";
import "@fontsource/inter";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Inter", sans-serif;
  }
`;

const ConverterLayout = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: content-box;
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: 100vh;
    max-height: 100vh;
    overflow-y: auto;
  }
`;

export default ConverterLayout;
