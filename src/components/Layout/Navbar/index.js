import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { NavbarContainer, NavbarLinks, NavbarLink } from "./Styles"
import MenuSvg from "./menu.svg"
import Logo from "../../../images/HeadshotsOnTheGo.png"

export default function Navbar({ openSidebar }) {
  const data = useStaticQuery(graphql`
    query GetBookingLink {
      site {
        siteMetadata {
          bookingLink
        }
      }
    }
  `)

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
          <Link to="/team">Our Team</Link>
        </NavbarLink>
        <NavbarLink>
          <Link to="/pricing">Pricing</Link>
        </NavbarLink>
        <NavbarLink>
          <a href={data.site.siteMetadata.bookingLink}>Book Today</a>
        </NavbarLink>
      </NavbarLinks>
    </NavbarContainer>
  )
}
