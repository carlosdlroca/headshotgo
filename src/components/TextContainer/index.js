import styled from "styled-components"

export default styled.section`
  width: 100%;
  text-align: center;
  padding: 6rem 0;

  & > *:not(:last-child) {
    margin-bottom: 2.2rem;
  }

  h1 {
    font-size: clamp(5rem, 3vw, 6rem);
    color: var(--color-primary);
    line-height: 1.9;
  }

  p {
    color: var(--color-text-dark);
    font-size: clamp(2.1rem, 2vw, 2.3rem);
    line-height: 1.7;
    margin: 0 auto 2rem;
    width: min(85vw, 75rem);
  }
`
