import styled from "styled-components"

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-gap: 1.5rem;
  margin: 0 auto 5rem;
  width: 95vw;
`
export const Tile = styled.div`
  position: relative;
  cursor: pointer;
  overflow: hidden;
`
