import { createGlobalStyle, styled } from "styled-components";
import { primaryColor, primaryDarkColor } from "../config/colors";

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }

    body {
        font-family: sans-serif;
        background-color: ${primaryDarkColor};
        color: ${primaryDarkColor};
    }

    html, body, #root {
        height: 100%;
    }

    button {
        cursor: pointer;
        background-color: ${primaryColor};
        border: none;
        color: white;
        padding: 10px 20px;
        border-radius: 4px;
        font-weight: bold;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }
`;

export const Container = styled.section`
  max-width: 360px;
  background-color: #fff;
  margin: 30px auto;
`;

export default GlobalStyle;
