import styled from "styled-components"

export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(2, 0.5fr) repeat(4, 0.2fr) repeat(2, 0.5fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;

  [class*="Image"] {
    object-fit: cover;
    object-position: 10%;
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;

    img,
    picture {
      height: 100%;
      width: 100%;
    }
  }

  .Image1 {
    grid-area: 1 / 1 / 5 / 3;
  }
  .Image2 {
    grid-area: 5 / 1 / 9 / 3;
  }
  .Image3 {
    grid-area: 1 / 9/ 5 / 11;
  }
  .Image4 {
    grid-area: 5 / 9/ 9 / 11;
  }

  .Image5 {
    grid-area: 1 / 3 / 3 / 5;
  }

  .Image6 {
    grid-area: 1 / 7/ 3 / 9;
  }

  .Image7 {
    grid-area: -3 / 3 / -1 / 5;
  }

  .Image8 {
    grid-area: -3 / 7/ -1 /9;
  }

  @media only screen and (max-width: 91em) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 0.7fr 1fr 0.7fr;

    .Image1 {
      grid-area: 1 / 1 / 2 / 2;
    }
    .Image2 {
      grid-area: 3 / 1 / 4 / 2;
    }
    .Image3 {
      grid-area: 1 / 3/ 2 / 4;
    }
    .Image4 {
      grid-area: 3 / 3 / 4 / 4;
    }

    .Image5 {
      grid-area: 1 / 2 / 2 / 3;
    }

    .Image6 {
      grid-area: 3 / 2 / 4 / 3;
    }

    .Image7,
    .Image8 {
      display: none;
      visibility: hidden;
    }
  }

  @media only screen and (max-width: 50em) {
    grid-column-gap: 0.3rem;
  }
`
export const MiddleContent = styled.section`
  grid-area: 3 / 3 / 7 / 9;

  @media only screen and (max-width: 91em) {
    grid-area: 2 / 1/ 3 / 4;
  }
`
