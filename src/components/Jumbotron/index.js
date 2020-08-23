import styled from "styled-components"

export default styled.div`
  background: var(--color-tertiary);
  border-radius: 0.5rem;
  margin: 4rem auto;
  padding: 16rem 4rem;
  width: min(85%, 125rem);

  display: flex;
  flex-direction: column;
  align-items: center;

  & > *:not(:last-child) {
    margin-bottom: 5rem;
  }

  h1 {
    font-size: 4rem;
    color: white;
  }

  h2 {
    font-size: 1.3rem;
    color: #eee;
    text-align: center;
    font-weight: 500;
  }

  button {
    background: white;
    padding: 1rem 3rem;
    font-size: 2.3rem;
    color: var(--color-secondary);
    border-radius: 3rem;
    transition: all 0.2s ease;
    &:hover,
    &:focus {
      cursor: pointer;
      background-color: #ededed;
    }
  }

  @media only screen and (max-width: 40em) {
    h1 {
      font-size: 2.6rem;
    }
  }
  @media only screen and (min-width: 65em) {
    h2 {
      width: 65%;
      font-size: 2rem;
    }
  }
`
