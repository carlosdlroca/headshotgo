import styled from "styled-components"

export default styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ bgColor }) =>
    bgColor ? bgColor : "var(--color-quaternary)"};
  color: var(--color-primary);
  padding: 6rem 1rem;
  width: 100%;
  h1 {
    font-size: clamp(2.8rem, 3vw, 4rem);
    text-align: center;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
    width: 100%;
    margin: 3rem 0;

    @media only screen and (max-width: 45.625em) {
      grid-template-columns: 1fr;
    }

    @media only screen and (min-width: 65em) {
      padding: 6rem 12vw;
    }
  }
`
