import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto;
    }

    a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    }

    a:link,
    a:visited {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    }

    a:link:active,
    a:visited:active {
    color: inherit;
    }

`;
