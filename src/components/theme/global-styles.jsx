/** @format */

import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Operator Mono Lig;
    transition: all 0.5s linear;
  }
  `;
