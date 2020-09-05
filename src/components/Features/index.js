import styled from "styled-components"

export const FeaturesContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 1rem;
  justify-content: space-between;
  width: min(95vw, 115rem);
  margin: 2rem auto 10rem;
`

export const Feature = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  &:nth-of-type(even) {
    grid-template-columns: 3fr 1fr;
    .Illustration {
      grid-row: 1 / 2;
      grid-column: 2 / 3;
    }

    & > *:last-child {
      grid-row: 1 / 2;
      grid-column: 1 / 2;
      text-align: right;
    }
  }

  & .Illustration {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    position: relative;
    width: 70%;
    .Blob {
      grid-row: 1 / 2;
      grid-column: 1 / 2;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      transform: scale(1.7);
    }
  }

  @media only screen and (max-width: 47em) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    display: grid;

    &:nth-of-type(even) {
      grid-template-columns: 1fr;
      & > *:last-child {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
        text-align: unset;
      }
    }

    /* height: 65vh; */
    .Illustration,
    &:nth-of-type(even) .Illustration {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
      margin: 0 auto;
      position: relative;
      .Blob {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(1.5);
      }
    }

    .Illustration {
      svg {
        margin: 0 auto;
        height: 16rem !important;
        width: 16rem !important;
      }
    }

    div {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }
  }

  @media only screen and (max-width: 42em) {
    grid-row-gap: 3rem;
  }
`

Feature.Content = styled.div`
  display: grid;
  place-content: center;
  padding: 1rem 10rem;
  h1 {
    font-size: clamp(2.4rem, 2.6vw, 3.6rem);
    color: var(--color-primary);
  }

  p {
    font-size: 1.6rem;
    color: var(--color-text-light);
  }
`
