import styled from "styled-components"

const Button = styled.button`
  background: ${({ bgColor }) => (bgColor ? bgColor : "var(--color-primary)")};
  border-radius: 4rem;
  color: ${({ color }) => (color ? color : "white")};
  font-size: 2rem;
  padding: 1rem 2rem;
  transition: all 0.15s ease-out;

  @media only screen and (max-width: 52em) {
    ${({ big }) => {
      if (big) {
        return "font-size: 4rem;\npadding:1.5rem 3.2rem;"
      }
    }}
  }
  &:hover,
  &:focus {
    cursor: pointer;
    box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.4);
    transform: translateY(-0.4rem);
  }

  &:active {
    box-shadow: 0 0.2rem 0.7rem rgba(0, 0, 0, 0.7);
    transform: translateY(-0.2rem);
  }
`
export default Button
