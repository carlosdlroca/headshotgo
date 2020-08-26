import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
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
        <Link to="/portfolio">Our Work</Link>
        <Link to="/team">Our Team</Link>
        <Link to="/pricing">Pricing</Link>
      </SidebarContent>
    </SidebarContainer>
  )
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeSidebar: PropTypes.func.isRequired,
}

export default Sidebar
