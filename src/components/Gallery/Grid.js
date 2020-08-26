import styled from "styled-components"

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  /* grid-auto-rows: 60rem; */
  grid-gap: 1.5rem;
  margin: 0 0 5rem;

  @media only screen and (min-width: 43.75em) {
    grid-template-columns: repeat(3, 1fr);
    width: 95%;
    margin: 0 auto 5rem;
  }

  @media only screen and (min-width: 65em) {
    width: 85%;
  }

  @media only screen and (min-width: 75em) {
    width: min(112rem, 75vw);
  }
`
export const Tile = styled.div`
  position: relative;
  cursor: pointer;
  overflow: hidden;
`
