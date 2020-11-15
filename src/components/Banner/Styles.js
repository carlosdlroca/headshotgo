import styled from "styled-components"

export default styled.header`
  max-width: 100vw;
  min-height: 60rem;
  background: url("/hsgo.png"), black;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: height 0.5s ease;
  padding: 1rem 5rem 5rem;
  ${({ closed }) => (closed ? `display: none` : "")};
  position: relative;

  @media only screen and (max-width: 65em) {
    min-height: 45rem;
    background-size: contain;
    button {
      font-size: 2.4rem;
      padding: 1rem 1.8rem;
    }
  }

  button {
    padding: 0.6rem 1.4rem;
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
    position: absolute;
    bottom: 4rem;
    right: 4rem;
    display: flex;
  }
`
