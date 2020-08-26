import styled, { keyframes } from "styled-components"

export const FadeInAnimation = keyframes`
    from {
        opacity: 0;
        transform: translateY(-100%);
    } to {
        opacity: 1;
        transform: translateY(0);
    }
`

export const FadeInContainer = styled.div`
  animation-name: ${FadeInAnimation};
  animation-duration: ${({ duration }) => (duration ? duration : ".6s")};
  animation-timing-function: ${({ timingFunction }) =>
    timingFunction
      ? timingFunction
      : "cubic-bezier(1.000, -0.600, 0.000, 1.650);"};
`
