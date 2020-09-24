import styled from "styled-components"

export default styled.section`
  background-color: ${({ bgColor }) =>
    bgColor ? bgColor : "var(--color-quaternary)"};
  color: var(--color-text-dark);
  padding: 3rem 1rem;
  width: 100%;
  margin-bottom: 20rem;

  h1 {
    font-size: 4rem;
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
