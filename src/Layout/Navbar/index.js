import React from "react"
import { NavbarContainer, NavbarLinks, NavbarLink } from "./Styles"
import DropdownMenu from './DropdownMenu';
import { Link } from "gatsby"
import MenuSvg from "./menu.svg"
import LightLogo from "../../images/HeadshotsOnTheGoWhite.png"
import DarkLogo from "../../images/HeadshotsOnTheGo.png"

export default function Navbar({ openSidebar, isSticky, dropDownIsOpen, toggleDropdown}) {

  return (
    <NavbarContainer style={{
      "--nav-bg-color": isSticky || dropDownIsOpen ? "#FFF" : null,
      "--nav-shadow": isSticky || dropDownIsOpen ? "0 1rem 1rem rgba(0,0,0,0.5)" : null,
      "--sidebarButton-fill": isSticky || dropDownIsOpen? "var(--bg-color)" : null
    }}
      onClick={toggleDropdown}
    >
      <Link to="/">
        <div className="Logo">
          <img src={isSticky || dropDownIsOpen ? DarkLogo : LightLogo} alt="Headshots on the go" />
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
        "--navlink-color": isSticky || dropDownIsOpen ? "var(--bg-color)" : null,
        "--navlink-shadow": isSticky || dropDownIsOpen ? "none" : null
      }}>
        <NavbarLink>
          <span id="services">Services</span>
        </NavbarLink>
        <NavbarLink>
          <Link to="/contact">Contact</Link>
        </NavbarLink>
        <NavbarLink>
          <Link to="/faq">F.A.Q</Link>
        </NavbarLink>
        <DropdownMenu isOpen={dropDownIsOpen}>
            <Link to="/headshots">Headshots</Link>
            <Link to="/graduation">Graduation</Link>
          </DropdownMenu>
      </NavbarLinks>
      
    </NavbarContainer>
  )
}
