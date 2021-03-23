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
  padding: 0 3rem;
  transition: .4s;

  .Logo {
    margin: 1rem 0;
    img {
      height: 8rem;
      width: 8rem;
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
    padding: 0 12vw;
  }
`

export const NavbarLinks = styled.ul`
  display: grid;
  position: relative;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: stretch;
  align-self: stretch;
  @media only screen and (max-width: 65.63em) {
    display: none;
  }
`

export const NavbarLink = styled.li`
  display: grid;
  place-items: center;
  user-select: none;
  a, span {
    display: grid;
    place-items: center;
    color: var(--navlink-color, --text-white-1);
    font-size: 2rem;
    font-weight: 600;
    padding: 1rem 2rem;
    text-decoration: none;
    text-shadow: 0 0 1rem var(--navlink-shadow, rgba(0,0,0,.5));
    transition: .3s;
    background-color: inherit;

    height: 100%;
    width: 100%;
  }

  &:hover,
  &:focus {
    cursor: pointer;
    background: var(--link-hover, rgba(241, 245, 249, 0.4));
  }
`
