import styled from "styled-components"
import { FadeInAnimation } from "../components/Animations/FadeIn"

export default styled.h1`
  animation: 0.5s ${FadeInAnimation} ease-out;
  background-image: linear-gradient(45deg, #845ec2, #ff6f91);
  -webkit-background-clip: text;
  color: transparent;
  font-size: 4.4rem;
  margin: 3rem 0 10rem;
  text-align: center;
`
