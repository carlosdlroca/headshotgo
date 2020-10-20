import styled, { keyframes } from "styled-components"

const BackgroundAnimation = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
  to {
    transform: translateY(0);
    opacity: 1;
clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
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

    height: 65vh;
    width: 100%;
    background: var(--color-primary);
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    z-index: -1;

    animation: ${BackgroundAnimation} 0.85s ease;

    @media only screen and (max-width: 50em) {
      height: 60vh;
    }
  }
`
