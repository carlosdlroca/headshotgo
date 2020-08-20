import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    :root {
        --color-primary: #253B6E;
        --color-secondary: #1f5f8b;
        --color-tertiary: #1891ac;
        --color-quaternary: #d2ecf9;
    }
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    } 

    html {
        font-size: 62.5%;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    a {
        text-decoration: none;
    }
    button {
        border: none;
        background: none;
    }

    ul {
        list-style: none;
    }

`
