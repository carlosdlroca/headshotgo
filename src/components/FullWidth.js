import styled from "styled-components"

export default styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ bgColor }) =>
    bgColor ? bgColor : "var(--color-quaternary)"};
  color: var(--color-text-dark);
  padding: 3rem 1rem;
  width: 100%;
  min-height: 50vh;

  h1 {
    font-size: clamp(2.8rem, 3vw, 4rem);
    text-align: center;
  }
`
