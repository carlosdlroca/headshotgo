import React from "react"
import { Link } from "gatsby"
import { NavbarContainer, NavbarLinks, NavbarLink } from "./Styles"
import MenuSvg from "./menu.svg"
import LightLogo from "../../images/HeadshotsOnTheGoWhite.png"
import DarkLogo from "../../images/HeadshotsOnTheGo.png"

export default function Navbar({ openSidebar, isSticky }) {
  return (
    <NavbarContainer style={{
      "--nav-bg-color": isSticky ? "#FFF" : null,
      "--nav-shadow": isSticky ? "0 1rem 1rem rgba(0,0,0,0.5)" : "none",
      "--sidebarButton-fill": isSticky ? "var(--bg-color)" : null
    }}>
      <Link to="/">
        <div className="Logo">
          <img src={isSticky ? DarkLogo : LightLogo} alt="Headshots on the go" />
        </div>
      </Link>
      <button
        id="openSidebarButton"
        onClick={openSidebar}
        aria-label="Open Sidebar"
      >
        <MenuSvg />
      </button>
      <NavbarLinks style={{
        "--navlink-color": isSticky ? "var(--bg-color)" : null,
        "--navlink-shadow": isSticky ? "none" : null
      }}>
        <NavbarLink>
          <Link to="/pricing">Pricing</Link>
        </NavbarLink>
        <NavbarLink>
          <Link to="/contact">Contact</Link>
        </NavbarLink>
        <NavbarLink>
          <Link to="/faq">F.A.Q</Link>
        </NavbarLink>
      </NavbarLinks>
    </NavbarContainer>
  )
}
