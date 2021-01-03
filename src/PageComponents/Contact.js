import styled from "styled-components"

export const ContactPageContainer = styled.div`
  display: grid;
  place-items: center;
  padding: 10rem 0 5rem;
  overflow-x: hidden;
`
export const ExtraInfo = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.4fr;
  grid-auto-rows: 1fr;
  grid-row-gap: 4rem;
  grid-column-gap: 2rem;
  margin-top: 10rem;
  color: var(--text-white-1);
  width: min(95vw, 110rem);

  .MainTitle {
    font-size: 5rem;
    text-align: center;
    grid-area: 1 / 1 / 2 / 3;
    text-decoration: underline;
    text-decoration-color: var(--color-primary);
  }

  .SubSection {
    .SubTitle {
      font-size: 3.3rem;
    }

    .SubText {
      color: var(--color-white-3);
      font-size: 1.5rem;
      line-height: 1.7;
    }
  }

  @media only screen and (max-width: 55em) {
    grid-template-columns: 1fr;

    .MainTitle {
      font-size: 6rem;
      grid-area: 1 / 1 / 2 / 2;
    }

    .SubText {
      font-size: 1.8rem;
    }
  }
`
