import styled from "styled-components"

export const Form = styled.form`
  width: min(95vw, 90rem);
  margin: 0 auto;
  position: relative;
  button {
    border-radius: 0.4rem;
    box-shadow: 0 0.4rem 0.3rem rgba(0, 0, 0, 0.4);
    @media only screen and (max-width: 50em) {
      font-size: 3rem;
    }
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-image: url("https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80");
    background-size: cover;
    background-position: center;
    border-radius: 0.4rem;
    width: 100%;
    height: 100%;
    z-index: 5;
    transform: scale(1.1) rotateZ(-10deg);

    @media only screen and (max-width: 55em) {
      transform: rotate(-11deg);
    }
  }
`
export const InputGroup = styled.p`
  position: relative;
  z-index: 10;
  &:not(:last-child) {
    margin-bottom: 2rem;

    @media only screen and (max-width: 50em) {
      margin-bottom: 5rem;
    }
  }
`
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: clamp(2.1rem, 2.3vw, 2rem);
  color: var(--text-white-1);

  @media only screen and (max-width: 50em) {
    font-size: 3rem;
  }
`
export const Input = styled.input`
  font-size: 2rem;
  padding: 1rem;
  font-weight: 500;
  width: 100%;
  border: none;
  border-bottom: 0.6rem solid transparent;
  -webkit-appearance: none;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
  color: var(--color-black-1);
  background: var(--text-white-1);
  &:focus {
    outline: none;
    background: var(--text-white-1);
    border-bottom-color: var(--color-primary);
  }
  @media only screen and (max-width: 50em) {
    font-size: 2.5rem;
  }
`
export const TextArea = styled.textarea`
  font-size: 2rem;
  padding: 0.4rem;
  width: 100%;
  min-height: 15rem;
  resize: none;

  @media only screen and (max-width: 50em) {
    font-size: 2.5rem;
    padding: 1rem;
  }
`
