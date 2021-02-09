import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    :root {
        --color-primary:#3B82F6;
        --color-secondary:#60A5FA;
        --color-tertiary: #93C5FD;
        --color-quaternary: #BFDBFE;

        --bg-color: #0f172a;

        --color-text-dark: #1a2a3a;
        --color-text-light: #4a5a6a;

        --color-black-4: #475569;
        --color-black-3: #334155;
        --color-black-2: #1E293B;
        --color-black-1: #0F172A;

        --text-white-1: #F8FAFC;
        --text-white-2: #F1F5F9;
        --text-white-3: #E2E8F0;
        --text-white-4:#CBD5E1;
    }
    
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    } 

    html {
        font-size: 62.5%;
        font-family: 'Roboto', sans-serif;

        @media only screen and (max-width: 65em) {
            font-size: 56.25%;
        }

        @media only screen and (max-width: 55em) {
            font-size: 50%;
        }

        @media only screen and (max-width: 45em) {
            font-size: 43.75%;
        }
    }

    html, body {
        height: 100%;
        width: 100%;
    }
    body {
        background-color: var(--bg-color, #0f172a);
        color: var(--text-white-1);
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

   .link-svg {
        fill: var(--color-primary);
        path {
            fill: var(--color-primary);
            transition: fill .2s ease;
        }

        &:hover {
            path {
                fill: var(--color-secondary);
            }
        }
    }

    ::selection {
        background: var(--color-primary);
        color: white;
    }
`
