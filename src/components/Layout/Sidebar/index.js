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
        <Link onClick={closeSidebar} to="/portfolio">
          Our Work
        </Link>
        <Link onClick={closeSidebar} to="/pricing">
          Pricing
        </Link>
      </SidebarContent>
    </SidebarContainer>
  )
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeSidebar: PropTypes.func.isRequired,
}

export default Sidebar
