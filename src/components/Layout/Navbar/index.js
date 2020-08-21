import React from "react"
import { Link } from "gatsby"
import { NavbarContainer, NavbarLinks, NavbarLink } from "./Styles"
import MenuSvg from "./menu.svg"

export default function Navbar({ openSidebar }) {
  return (
    <NavbarContainer>
      <div id="Logo">Logo</div>
      <button
        id="openSidebarButton"
        onClick={openSidebar}
        aria-label="Open Sidebar"
      >
        <MenuSvg />
      </button>
      <NavbarLinks>
        <NavbarLink>
          <Link to="/portfolio">Our Work</Link>
        </NavbarLink>
        <NavbarLink>
          <Link to="/team">Our Team</Link>
        </NavbarLink>
        <NavbarLink>
          <Link to="/about">About Us</Link>
        </NavbarLink>
        <NavbarLink>
          <Link to="/book">Book Today</Link>
        </NavbarLink>
        <NavbarLink>
          <Link to="/pricing">Pricing</Link>
        </NavbarLink>
      </NavbarLinks>
    </NavbarContainer>
  )
}
