import styled from "styled-components"
import { FadeInAnimation } from "../components/Animations/FadeIn"

export default styled.h1`
  animation: 0.5s ${FadeInAnimation} ease-out;
  color: ${({ color }) => (color ? "var(--color-primary)" : "#fff")};
  font-size: 4.4rem;
  margin: 3rem 0 10rem;
  text-align: center;
`
