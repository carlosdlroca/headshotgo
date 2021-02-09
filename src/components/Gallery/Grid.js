import styled from "styled-components"

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-gap: 4rem;
  grid-row-gap: 5rem;
  margin: 15rem auto;
  width: 95vw;

  @media only screen and (max-width: 58.2em) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
  }

  @media only screen and (max-width: 45em) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
  }

  @media only screen and (min-width: 65em) {
    width: 135rem;
  }
`
export const Tile = styled.div`
  position: relative;
  cursor: pointer;
  overflow: hidden;
`
