import styled from "styled-components"

export const FooterContainer = styled.footer`
  background: var(--color-primary);
  padding: 1rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 1.6rem;
  color: white;

  align-items: center;

  #socialmedia {
    display: grid;
    grid-template-columns: repeat(3, 6rem);
    grid-template-rows: auto 1fr;
    margin: 3rem 0;
    justify-self: flex-end;
    h2 {
      grid-column: 1 / -1;
      font-size: 1.8rem;
    }
    li {
      &:not(:last-child) {
        margin-right: 2rem;
      }
    }

    svg,
    svg path {
      fill: white;

      &:hover,
      &:focus {
        fill: var(--color-quaternary);
      }
    }
  }

  @media only screen and (max-width: 65.63em) {
    grid-template-columns: 1fr;
    padding: 3rem 1rem;
    #socialmedia {
      justify-self: unset;
      h1 {
        flex: 0 0 0;
      }
    }
  }
`
export const Copyright = styled.span`
  font-size: 1.2rem;
`
