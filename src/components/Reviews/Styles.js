import styled from "styled-components"

export const ReviewsContainer = styled.section`
  width: min(110rem, 95vw);
  margin: 0 auto 20rem;
`

export const ReviewBoxes = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  grid-gap: 10rem;

  @media only screen and (max-width: 50em) {
    grid-template-columns: 1fr;
    grid-column-gap: 0.2rem;
    grid-row-gap: 9rem;
    & > *:nth-of-type(n) {
      transform: translateY(0);
    }
  }
`

export const ReviewHeader = styled.div`
  display: grid;
  place-items: center;
  margin-bottom: 5rem;
  padding-bottom: 5rem;

  h1 {
    color: var(--color-primary);
    font-size: clamp(2rem, 5vw, 5rem);
    text-align: center;
  }

  p {
    color: var(--color-text-light);
    font-size: 2rem;
    text-align: center;
    line-height: 1.7;
  }
`

export const ReviewBox = styled.div`
  border-radius: 1rem;
  padding: 1rem 2rem;
  display: grid;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  .Title {
    font-size: 2rem;
    color: steelblue;
    font-weight: 600;
  }

  @media only screen and (max-width: 50em) {
    .Title {
      font-size: 2.2rem;
    }
  }
`

ReviewBox.Author = styled.h2`
  font-size: 2.2rem;
  color: var(--color-primary);
  @media only screen and (max-width: 50em) {
    font-size: 4rem;
  }
`
ReviewBox.Text = styled.p`
  font-size: 1.4rem;
  line-height: 1.3;
  color: #333;
  margin-bottom: 2rem;

  @media only screen and (max-width: 50em) {
    font-size: 2rem;
    margin-bottom: 5rem;
    line-height: 1.7;
  }
`
