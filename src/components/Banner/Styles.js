import styled from "styled-components"

export default styled.header`
  width: 100vw;
  min-height: 45rem;
  background: rgb(0, 228, 255);
  background: linear-gradient(
    148deg,
    rgba(0, 228, 255, 1) 16%,
    rgba(2, 0, 36, 1) 16%,
    rgba(2, 0, 36, 1) 77%,
    rgba(0, 212, 255, 1) 77%
  );
  transition: height 0.5s ease;
  display: grid;
  place-items: center;
  padding: 1rem 5rem 5rem;
  ${({ closed }) => (closed ? `display: none` : "")};

  .Details {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  h1 {
    font-size: 4rem;
    color: white;
    margin-bottom: 2rem;
    text-align: center;
  }

  .offer {
    font-size: 3rem;
    line-height: 1.7;
    color: white;
    .package {
      font-weight: 600;
      color: white;
      padding: 1rem 2rem;
      letter-spacing: 0.3rem;
      margin-bottom: 1rem;
      &.aff {
        background: #55ee88;
      }
      &.pop {
        background: #5555ee;
      }
    }
  }

  button {
    padding: 1rem 2rem;
    font-size: 2.2rem;
    border-radius: 1rem;
    color: white;
    cursor: pointer;
    &.Link {
      background: #00c896;
      margin-right: 4rem;
    }

    &.Close {
      background: #ff6666;
    }
  }
  .buttons {
    display: flex;
  }
`
