import styled from "styled-components"

export const ReviewsContainer = styled.section`
  width: min(86rem, 95vw);
  margin: -5rem auto 20rem;
`

export const ReviewBoxes = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  grid-row-gap: 3rem;
  grid-column-gap: 5rem;
  /* 
  & > *:nth-child(4),
  & > *:nth-child(7),
  & > *:nth-child(10) {
    transform: translateY(0);
  }

  & > *:nth-child(2),
  & > *:nth-child(5),
  & > *:nth-child(8),
  & > *:nth-child(11) {
    transform: translateY(3rem);
  }

  & > *:nth-of-type(3n) {
    transform: translateY(6rem);
  } */

  @media only screen and (max-width: 50em) {
    grid-template-columns: 1fr;
    grid-column-gap: 0.2rem;
    /* & > *:nth-of-type(n) {
      transform: translateY(0);
    } */
  }
`

export const ReviewHeader = styled.div`
  display: grid;
  place-items: center;
  margin-bottom: 8rem;

  h1 {
    font-size: clamp(2rem, 5vw, 5rem);
    text-align: center;
    color: var(--color-primary);
  }

  p {
    font-size: 1.8rem;
    color: var(--color-text-light);
  }
`

export const ReviewBox = styled.div`
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 2rem 0.2rem var(--color-tertiary);
  border-radius: 1rem;
  padding: 2rem;
`

ReviewBox.Author = styled.h2`
  font-size: 2.2rem;
  color: var(--color-primary);
`
ReviewBox.Text = styled.p`
  font-size: 1.6rem;
  line-height: 1.3;
  color: var(--color-text-dark);

  @media only screen and (max-width: 50em) {
    font-size: 2rem;
  }
`
ReviewBox.Image = styled.div`
  border-radius: 50%;
  border: 0.2rem solid white;
`
