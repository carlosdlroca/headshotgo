import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    :root {
        --color-primary:#3B82F6;
        --color-secondary:#60A5FA;
        --color-tertiary: #93C5FD;
        --color-quaternary: #BFDBFE;

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
        background-color: #0f172a;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect stroke='%230f172a' stroke-width='0.58' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='rotate(139 1000 750) scale(25.55) translate(-960.86 -720.65)'%3E%3Cuse fill='%23141c2e' href='%23s' y='2'/%3E%3Cuse fill='%23141c2e' href='%23s' x='1' y='2'/%3E%3Cuse fill='%23192033' href='%23s' x='2' y='2'/%3E%3Cuse fill='%23192033' href='%23s'/%3E%3Cuse fill='%231d2537' href='%23s' x='2'/%3E%3Cuse fill='%231d2537' href='%23s' x='1' y='1'/%3E%3C/pattern%3E%3Cpattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='rotate(139 1000 750) scale(25.55) translate(-960.86 -720.65)'%3E%3Cg fill='%23222a3b'%3E%3Cuse href='%23s'/%3E%3Cuse href='%23s' y='5' /%3E%3Cuse href='%23s' x='1' y='10'/%3E%3Cuse href='%23s' x='2' y='1'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='8'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='5' y='2'/%3E%3Cuse href='%23s' x='5' y='6'/%3E%3Cuse href='%23s' x='6' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='rotate(139 1000 750) scale(25.55) translate(-960.86 -720.65)'%3E%3Cg fill='%23222a3b'%3E%3Cuse href='%23s' y='5'/%3E%3Cuse href='%23s' y='8'/%3E%3Cuse href='%23s' x='1' y='1'/%3E%3Cuse href='%23s' x='1' y='9'/%3E%3Cuse href='%23s' x='1' y='12'/%3E%3Cuse href='%23s' x='2'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='2'/%3E%3Cuse href='%23s' x='3' y='6'/%3E%3Cuse href='%23s' x='3' y='11'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='4' y='10'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='rotate(139 1000 750) scale(25.55) translate(-960.86 -720.65)'%3E%3Cg fill='%23272e3f'%3E%3Cuse href='%23s' y='11'/%3E%3Cuse href='%23s' x='2' y='9'/%3E%3Cuse href='%23s' x='5' y='12'/%3E%3Cuse href='%23s' x='9' y='4'/%3E%3Cuse href='%23s' x='12' y='1'/%3E%3Cuse href='%23s' x='16' y='6'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='rotate(139 1000 750) scale(25.55) translate(-960.86 -720.65)'%3E%3Cg fill='%230f172a'%3E%3Cuse href='%23s' y='9'/%3E%3Cuse href='%23s' x='16' y='5'/%3E%3Cuse href='%23s' x='14' y='2'/%3E%3Cuse href='%23s' x='11' y='11'/%3E%3Cuse href='%23s' x='6' y='14'/%3E%3C/g%3E%3Cg fill='%232c3344'%3E%3Cuse href='%23s' x='3' y='13'/%3E%3Cuse href='%23s' x='9' y='7'/%3E%3Cuse href='%23s' x='13' y='10'/%3E%3Cuse href='%23s' x='15' y='4'/%3E%3Cuse href='%23s' x='18' y='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='rotate(139 1000 750) scale(25.55) translate(-960.86 -720.65)'%3E%3Cg fill='%233b82f6'%3E%3Cuse href='%23s' x='2' y='5'/%3E%3Cuse href='%23s' x='16' y='38'/%3E%3Cuse href='%23s' x='46' y='42'/%3E%3Cuse href='%23s' x='29' y='20'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='rotate(139 1000 750) scale(25.55) translate(-960.86 -720.65)'%3E%3Cg fill='%233b82f6'%3E%3Cuse href='%23s' x='33' y='13'/%3E%3Cuse href='%23s' x='27' y='54'/%3E%3Cuse href='%23s' x='55' y='55'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='rotate(139 1000 750) scale(25.55) translate(-960.86 -720.65)'%3E%3Cg fill='%233b82f6'%3E%3Cuse href='%23s' x='11' y='8'/%3E%3Cuse href='%23s' x='51' y='13'/%3E%3Cuse href='%23s' x='17' y='73'/%3E%3Cuse href='%23s' x='99' y='57'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23b)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23h)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23c)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23d)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23e)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23f)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23g)' width='100%25' height='100%25'/%3E%3C/svg%3E");
        background-attachment: fixed;
        background-size: cover;
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
