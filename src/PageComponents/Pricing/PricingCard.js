import styled from "styled-components"

export const PricingCards = styled.div`
  display: grid;
  grid-row-gap: 3rem;
  margin: 10rem auto 5rem;
  width: min(85vw, 120rem);

  .LocationComment {
    font-size: 2.2rem;
    color: var(--color-text-light);
  }

  @media only screen and (max-width: 52.5em) and (min-width: 40em) {
    width: 60%;
  }

  @media only screen and (min-width: 52.5em) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 2.3vw;
  }
`

export const PricingCard = styled.div`
  box-shadow: 0.1rem 0.3rem 1rem rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;
  overflow: hidden;
  background: #fff;
  .Main {
    color: var(--color-text-light);
    padding: 3rem 1.4rem 0;
    position: relative;
    line-height: 1.7;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      font-size: 3rem;
      margin-bottom: 2rem;
      text-align: center;
      color: ${({ color }) => color};
    }

    p {
      font-size: 1.8rem;
      line-height: 1.3;
    }

    .Price {
      font-size: 4.6rem;
      text-align: center;
      sup {
        font-size: 0.5em;
      }
    }
  }
  .BookNowLink {
    margin: 2rem 0;
  }
  button {
    color: white;
    background-color: ${({ color }) => color};
  }

  .psRetouch {
    font-weight: 700;
    text-decoration: underline;
    text-decoration-color: var(--color-text-dark);
    color: ${({ color }) => color};
  }

  @media only screen and (max-width: 50em) {
    .Main h1 {
      font-size: 4rem;
    }
  }

  @media only screen and (max-width: 31.25em) {
    & > *:not(:last-child) {
      margin-bottom: 2rem;
    }
  }

  @media only screen and (min-width: 52.5em) {
    &:nth-of-type(2n) {
      transform: translateY(-4rem);
    }
  }
`

export const PricingInfo = styled.div`
  background: white;
  color: var(--color-text-light);
  font-size: 1.8rem;
  line-height: 1.7;
  padding: 0 1rem 3rem;
  text-align: center;
  svg {
    height: 2rem;
    width: 2rem;
    fill: #44ee77;
  }

  @media only screen and (max-width: 47em) {
    font-size: 2.1rem;
  }
`
