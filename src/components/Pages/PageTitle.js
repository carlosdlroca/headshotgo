import styled from "styled-components"
import { FadeInAnimation } from "../Animations/FadeIn"

export default styled.h1`
  font-size: 3.4rem;
  text-align: center;
  color: var(--color-primary);
  margin: 3rem 0 5rem;
  animation: 0.5s ${FadeInAnimation} ease-out;
`
