import styled from "styled-components"

export const NavbarContainer = styled.nav`
  position: sticky;
  top: 0;
  z-index: 98;
  background-color: white;
  padding: 1.5rem 3rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: 0 0.3rem 3rem rgba(0, 0, 0, 0.3);

  #Logo {
    font-size: 3rem;
    color: var(--color-primary);
  }

  #openSidebarButton {
    svg,
    svg path {
      fill: var(--color-primary);
    }
    @media only screen and (min-width: 65.63em) {
      display: none;
    }
  }

  @media only screen and (min-width: 75em) {
    padding: 1.6rem 12vw;
  }
`

export const NavbarLinks = styled.ul`
  display: flex;

  @media only screen and (max-width: 65.63em) {
    display: none;
  }
`

export const NavbarLink = styled.li`
  a {
    font-size: 1.6rem;
    border-radius: 0.5rem;
    padding: 1rem 1.5rem;
    display: block;
    text-decoration: none;
    color: var(--color-secondary);
    transition: color 0.2s ease;
  }

  &:hover {
    background: var(--color-quaternary);
    cursor: pointer;
    a {
      color: var(--color-primary);
    }
  }

  &:not(:last-child) {
    margin-right: 2vw;
  }
`
