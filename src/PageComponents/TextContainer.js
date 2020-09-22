import styled from "styled-components"

export default styled.section`
  width: 100%;
  text-align: center;
  padding: 6rem 0;

  & > *:not(:last-child) {
    margin-bottom: 2.2rem;
  }

  h1 {
    font-size: clamp(3.4rem, 2.5vw, 4rem);
    line-height: 1.2;
    background-image: linear-gradient(45deg, #845ec2, #00c9a7);
    -webkit-background-clip: text;
    color: transparent;
  }

  p {
    color: var(--color-text-dark);
    font-size: clamp(1.8rem, 2vw, 2rem);
    line-height: 1.7;
    margin: 0 auto 2rem;
    width: min(85vw, 75rem);
  }
`
