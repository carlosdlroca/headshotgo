import styled from "styled-components"

export default styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ bgColor }) =>
    bgColor ? bgColor : "var(--color-quaternary)"};
  color: var(--color-text-dark);
  padding: 6rem 1rem;
  width: 100%;
  min-height: 50vh;

  h1 {
    font-size: clamp(2.8rem, 3vw, 4rem);
    text-align: center;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 4rem;
    width: min(95%, 112rem);
    margin: 3rem auto;

    @media only screen and (max-width: 45.625em) {
      grid-template-columns: 1fr;
      grid-row-gap: 4rem;
    }
    @media only screen and (max-width: 65em) {
      grid-column-gap: 2rem;
    }

    @media only screen and (min-width: 65em) {
      padding: 6rem 0;
    }
  }
`
