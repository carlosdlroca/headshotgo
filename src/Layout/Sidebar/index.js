import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Logo from "../../images/HeadshotsOnTheGoWhite.png"
import { SidebarContainer, SidebarContent } from "./Styles"
import CloseSvg from "./close.svg"

function Sidebar({ isOpen, closeSidebar }) {
  return (
    <SidebarContainer isOpen={isOpen}>
      <button
        id="close-sidebar"
        aria-label="Close Sidebar"
        onClick={closeSidebar}
      >
        <CloseSvg />
      </button>
      <SidebarContent>
        <Link onClick={closeSidebar} to="/pricing">
          Pricing
        </Link>
        <Link onClick={closeSidebar} to="/contact">
          Contact Us
        </Link>
        <Link href="https://headshotsonthego.pixieset.com/">
          Personal Gallery
        </Link>
        <Link onClick={closeSidebar} to="/faq">
          F.A.Q
        </Link>
        <img src={Logo} alt="Headshot-on-the-go" />
      </SidebarContent>
    </SidebarContainer>
  )
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeSidebar: PropTypes.func.isRequired,
}

export default Sidebar
