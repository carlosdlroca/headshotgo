import styled from "styled-components"

export const NavbarContainer = styled.nav`
  position: sticky;
  top: 0;
  z-index: 98;
  padding: 1.2rem 3rem;

  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  .Logo {
    img {
      height: 8.5rem;
      width: 8.5rem;
    }
  }

  #openSidebarButton {
    svg,
    svg path {
      fill: var(--text-white-1);
      cursor: pointer;
    }
    @media only screen and (min-width: 65.63em) {
      display: none;
    }
  }

  @media only screen and (min-width: 75em) {
    padding: 0.5rem 12vw;
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
    font-size: 2rem;
    font-weight: 600;
    border-radius: 1rem;
    padding: 1rem 1.5rem;
    display: block;
    text-decoration: none;
    color: var(--text-white-1);
    transition: color 0.2s ease;
  }

  &:hover,
  &:focus {
    cursor: pointer;
    a {
      text-decoration: underline;
    }
  }

  &:not(:last-child) {
    margin-right: 2vw;
  }
`
