import styled from "styled-components"

export const Form = styled.form`
  width: min(95vw, 90rem);
  margin: 0 auto;

  button {
    border-radius: 0.4rem;
    box-shadow: 0 0.4rem 0.3rem rgba(0, 0, 0, 0.4);
    @media only screen and (max-width: 50em) {
      font-size: 3rem;
    }
  }
`
export const InputGroup = styled.p`
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
  color: white;

  @media only screen and (max-width: 50em) {
    font-size: 3rem;
  }
`
export const Input = styled.input`
  font-size: 2rem;
  padding: 1rem;
  font-weight: 500;
  width: 100%;
  border-radius: 0.5rem;
  border: none;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
  &:focus {
    outline-color: var(--color-primary);
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

  @media only screen and (max-width: 50em) {
    font-size: 2.5rem;
    padding: 1rem;
  }
`
