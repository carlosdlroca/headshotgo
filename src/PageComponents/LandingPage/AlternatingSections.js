import styled from "styled-components"

const Section = styled.section`
  min-height: 85vh;
  display: grid;
  color: var(--text-white-1);
  padding: 2rem 2rem 5rem;

  .Illustration {
    display: grid;
    place-items: center;
  }

  .Content {
    display: grid;
    justify-items: center;
    align-content: center;
  }

  .Title {
    font-size: 5rem;
    line-height: 1.8;
  }

  .Text {
    font-size: 2.1rem;
    line-height: 1.8;
    width: 75%;
    margin: 3rem 0;
  }

  a {
    line-height: 1.8;
    font-size: 2.1rem;
    color: var(--text-white-1);
    background: var(--color-primary);
    padding: 1rem 3rem;
    border-radius: 0.8rem;
    transition: background 0.23s ease;
    &:hover {
      background: var(--color-tertiary);
    }
  }

  @media only screen and (max-width: 55em) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    max-height: 120vh;
    .Ilustration {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }
    .Content {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }
  }
`

export const SectionPrimary = styled(Section)`
  background: ${({ color }) => (color ? color : "#2563EB")};
  grid-template-columns: 1fr 2fr;
  .Content {
    grid-column: 2 / 3;
  }

  a {
    background-color: ${({ buttonColor }) =>
      buttonColor ? buttonColor : "#FDE047"};
  }

  @media only screen and (max-width: 55em) {
    grid-template-columns: 1fr;
    .Content {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }
  }
`
export const SectionSecondary = styled(Section)`
  grid-template-columns: 2fr 1fr;
  background: var(--color-black-1);
  .Content {
    grid-column: 1 / 2;
  }

  @media only screen and (max-width: 55em) {
    grid-template-columns: 1fr;
    .Content {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }
  }
`
