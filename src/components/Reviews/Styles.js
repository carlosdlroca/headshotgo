import styled from "styled-components"

export const ReviewsContainer = styled.section`
  width: min(110rem, 95vw);
  margin: 0 auto 20rem;
`

export const ReviewBoxes = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  grid-gap: 10rem;

  & > *:nth-child(4),
  & > *:nth-child(7),
  & > *:nth-child(10) {
    transform: translateY(0);
  }

  & > *:nth-child(2),
  & > *:nth-child(5),
  & > *:nth-child(8),
  & > *:nth-child(11) {
    transform: translateY(4.4rem);
  }

  & > *:nth-of-type(3n) {
    transform: translateY(7.4rem);
  }

  @media only screen and (max-width: 50em) {
    grid-template-columns: 1fr;
    grid-column-gap: 0.2rem;
    grid-row-gap: 12rem;
    & > *:nth-of-type(n) {
      transform: translateY(0);
    }
  }
`

export const ReviewHeader = styled.div`
  display: grid;
  place-items: center;
  margin-bottom: 8rem;
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
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.2);
  border-bottom: 0.7rem solid var(--color-primary);
  border-radius: 1rem;
  box-shadow: 0 0 2rem 0.2rem var(--color-tertiary);
  padding: 2rem;
  position: relative;
  .Quote {
    position: absolute;
    top: 0;
    left: 0;
    background: white;
    border-radius: 50%;
    border: 0.1rem solid var(--color-primary);
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.4) inset;
    width: 5rem;
    height: 5rem;
    transform: translate(-50%, -50%);
    display: grid;
    place-items: center;
    svg {
      fill: var(--color-primary);
    }

    @media only screen and (max-width: 50em) {
      transform: translateY(-50%);

      svg {
        height: 60%;
        width: 60%;
      }
    }
  }

  .Stars {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0.2rem 2rem;
    background: var(--color-primary);
    width: min(50rem, 55%);
    border-radius: 1rem;
    svg {
      fill: yellow;
      height: 4rem;
      width: 4rem;
    }
  }

  @media only screen and (max-width: 50em) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem 2rem;
    .Stars {
      svg {
        height: 4rem;
        width: 4rem;
      }
    }
  }
`

ReviewBox.Author = styled.h2`
  font-size: 2.2rem;
  color: var(--color-primary);
`
ReviewBox.Text = styled.p`
  font-size: 1.6rem;
  line-height: 1.3;
  color: var(--color-text-dark);
  margin-bottom: 2rem;

  @media only screen and (max-width: 50em) {
    font-size: 2.3rem;
    margin-bottom: 5rem;
    line-height: 1.7;
  }
`
ReviewBox.Image = styled.div`
  border-radius: 50%;
  border: 0.2rem solid white;
`
