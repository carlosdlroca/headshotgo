import styled from "styled-components"

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-gap: 4rem;
  grid-row-gap: 5rem;
  margin: 15rem auto;
  width: 95vw;
`
export const Tile = styled.div`
  position: relative;
  cursor: pointer;
  overflow: hidden;
`
