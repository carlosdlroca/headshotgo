import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    :root {
        --color-primary: #494ca2;
        --color-secondary: #8186d5;
        --color-tertiary:#c6cbef;
        --color-quaternary: #e3e7f1;

        --color-text-dark: #1a2a3a;
        --color-text-light: #4a5a6a;
    }
    
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    } 

    html {
        font-size: 62.5%;
        font-family: 'Roboto', sans-serif;
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

    .Logo {
    img {
      height: 15rem;
      width: 15rem;
      object-fit: contain;
    }
  }

`
