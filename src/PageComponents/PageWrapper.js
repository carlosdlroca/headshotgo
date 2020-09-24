import styled from "styled-components"

export default styled.div`
  position: relative;
  padding-top: 4rem;
  &:before {
    content: "";

    position: absolute;
    top: 0;
    left: 0;

    height: 55vh;
    width: 100%;
    background: var(--color-primary);
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    z-index: -1;

    @media only screen and (max-width: 50em) {
      height: 80vh;
    }
  }
`
