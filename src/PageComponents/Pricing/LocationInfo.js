import styled from "styled-components"

export const LocationInfo = styled.section`
  background: var(--color-quaternary);
  color: var(--color-text-dark);
  margin: 7rem 0 0;
  padding: 5rem;
  line-height: 1.8;
  h1 {
    font-size: clamp(2.8rem, 3vw, 3.1rem);
    text-align: center;
  }
  li {
    margin-bottom: 1rem;
    font-size: clamp(2rem, 2.3vw, 2.2rem);
    strong {
      text-decoration: underline;
      text-decoration-color: var(--color-primary);
    }
    p {
      color: var(--color-text-light);
      font-size: 0.96em;
      font-style: italic;
      &:before {
        content: "* ";
        font-size: 1.1em;
      }
    }
  }
`
