import styled from "styled-components"

export default styled.section`
  padding: 1rem 1rem 5rem;

  h1 {
    color: var(--color-primary);
    background: var(--text-white-2);
    letter-spacing: 0.15rem;
    font-size: 5rem;
    text-align: center;
    margin-bottom: 3rem;
  }

  button {
    font-size: 2rem;
    margin-top: 5rem;
  }

  @media only screen and (max-width: 50em) {
    padding: 5rem 1rem;

    h1 {
      font-size: 5.2rem;
    }

    button {
      font-size: 3rem;
      padding: 2rem 5rem;
    }
  }
`
