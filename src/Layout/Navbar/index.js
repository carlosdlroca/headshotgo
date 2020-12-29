import React from "react"
import { Link } from "gatsby"
import { NavbarContainer, NavbarLinks, NavbarLink } from "./Styles"
import MenuSvg from "./menu.svg"
import Logo from "../../images/HeadshotsOnTheGoWhite.png"

export default function Navbar({ openSidebar }) {
  return (
    <NavbarContainer>
      <Link to="/">
        <div className="Logo">
          <img src={Logo} alt="Headshots on the go" />
        </div>
      </Link>
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
          <Link to="/pricing">Pricing</Link>
        </NavbarLink>
        <NavbarLink>
          <Link to="/contact">Contact</Link>
        </NavbarLink>
      </NavbarLinks>
    </NavbarContainer>
  )
}
