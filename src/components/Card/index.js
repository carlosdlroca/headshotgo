import styled from "styled-components"

export default styled.div`
  background: #fdfdfd;
  border-radius: 0.8rem;
  padding: 2rem 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  color: ${({ color }) => color};

  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }

  h1 {
    text-decoration: underline;
    text-decoration-color: ${({ color }) => color};
    color: var(--color-primary);
    font-weight: 700;
    font-size: 2.4rem;

    @media only screen and (max-width: 49em) {
      font-size: 3rem;
    }

    @media only screen and (min-width: 50em) {
      font-size: 2.5rem;
    }
  }

  button {
    background: ${({ color }) => color};
    border-radius: 4rem;
    color: #fff;
    padding: 1.2rem 2rem;
    &:hover {
      cursor: pointer;
    }
  }

  .price {
    font-size: 4.2rem;
    font-weight: 500;
    color: var(--color-primary);
    text-decoration: underline wavy;
    text-decoration-color: ${({ color }) => color};
  }

  transition: box-shadow 0.2s ease;
  &:hover {
    box-shadow: 1rem 1rem ${({ color }) => color};
  }
`
