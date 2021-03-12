import styled from "styled-components"

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  z-index: 98;
  
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  
  background-color: var(--nav-bg-color, transparent);
  box-shadow: var(--nav-shadow);
  padding: 2rem 3rem;
  transition: .4s;

  .Logo {
    img {
      height: 8.5rem;
      width: 8.5rem;
    }
  }

  #openSidebarButton {
    svg,
    svg path {
      fill: var(--sidebarButton-fill, var(--text-white-1));
      cursor: pointer;
    }
    @media only screen and (min-width: 65.63em) {
      display: none;
    }
  }

  @media only screen and (min-width: 75em) {
    padding: 1rem 12vw;
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
    display: block;
    border-radius: 1rem;
    color: var(--navlink-color, --text-white-1);
    font-size: 2rem;
    font-weight: 600;
    padding: 1rem 1.5rem;
    text-decoration: none;
    text-shadow: 0 0 1rem var(--navlink-shadow, rgba(0,0,0,.5));
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
