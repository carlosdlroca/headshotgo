import styled, { keyframes } from "styled-components"

const BackgroundAnimation = keyframes`
  from {
    height: 0vh;
    opacity: 0;
  }
  to {
    height: 55vh;
    opacity: 1;
  }
`

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

    animation: ${BackgroundAnimation} 0.6s ease;

    @media only screen and (max-width: 50em) {
      height: 80vh;
    }
  }
`
