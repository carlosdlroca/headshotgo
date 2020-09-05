import styled from "styled-components"

export const PricingCards = styled.div`
  display: grid;
  grid-row-gap: 3rem;
  width: 65%;
  margin: 10rem auto;

  @media only screen and (max-width: 31.25em) {
    width: 97%;
  }

  @media only screen and (min-width: 65em) {
    width: min(90%, 110rem);
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 4rem;
  }
`

export const PricingCard = styled.div`
  box-shadow: 0.1rem 0.3rem 1rem rgba(0, 0, 0, 0.5);
  border-radius: 1rem;
  overflow: hidden;
  .Main {
    color: white;
    padding: 3rem 1.4rem;
    background-color: ${props => props.color};
    position: relative;
    line-height: 1.7;
    h1 {
      text-align: center;
      font-size: 2.1rem;
      margin-bottom: 2rem;
    }

    h2 {
      font-size: 1.7rem;
    }

    p {
      line-height: 1.3;
      font-size: 1.4rem;
      text-align: center;
    }
    .Price {
      text-align: center;
      font-size: 4.5rem;
    }
  }
  button {
    position: absolute;
    bottom: -2rem;
    left: calc(50% - 6.6rem);
    border: 0.2rem solid ${({ color }) => color};
  }

  @media only screen and (max-width: 31.25em) {
    & > *:not(:last-child) {
      margin-bottom: 2rem;
    }
  }

  @media only screen and (min-width: 65em) {
    &:nth-of-type(2n) {
      transform: translateY(-4rem);
    }
  }
`

export const PricingInfo = styled.div`
  background: white;
  color: var(--color-text-light);
  font-size: 1.6rem;
  line-height: 1.7;
  padding: 3.5rem 1rem 3rem;
  text-align: center;
`
