import styled from "styled-components"

export default styled.div`
  background: white;
  border-radius: 0.8rem;
  box-shadow: 0.1rem 0.1rem 1rem rgba(0, 0, 0, 0.2);
  padding: 2rem 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  color: var(--color-text-dark);

  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }

  &&& h1 {
    text-decoration: underline;
    text-decoration-color: var(--color-text-dark);
    color: var(--color-primary);
    /* font-weight: 700; */
    font-size: 2rem;
  }

  button {
    background: var(--color-primary);
    border-radius: 4rem;
    color: white;
    padding: 1.2rem 2rem;
    font-size: clamp(1.8rem, 2vw, 2.5rem);
    &:hover {
      cursor: pointer;
    }
  }

  .price {
    font-size: 2rem;
    font-weight: 600;
    color: var(--color-primary);
  }

  .pricing-link {
    color: var(--color-text-dark);
    font-size: 1.6rem;
    padding: 0.5rem 1.2rem;
    position: relative;
    overflow: hidden;
    transition: color 0.3s ease;
    z-index: 10;
    &:before {
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      transform: translateY(100%);
      transition: transform 0.3s ease;
      height: 100%;
      width: 100%;
      background: var(--color-secondary);
      z-index: -1;
    }

    &:hover {
      color: white;
      &:before {
        transform: translateY(0);
      }
    }
  }
`
