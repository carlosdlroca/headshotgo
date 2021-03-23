import React, {useState} from "react"
import { Link } from "gatsby"
import Logo from "../../images/HeadshotsOnTheGoWhite.png"
import { SidebarContainer, SidebarContent } from "./Styles"
import CloseSvg from "./close.svg"
import "./CollapseLinks.css";

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
        <CollapseLinks title="Services">
          <Link onClick={closeSidebar} to="/headshots">Headshots</Link>
          <Link onClick={closeSidebar} to="/graduation">Graduation</Link>
        </CollapseLinks>
        <a href="https://headshotsonthego.pixieset.com/">
          Personal Gallery
        </a>
        <Link onClick={closeSidebar} to="/contact">
          Contact Us
        </Link>
        <Link onClick={closeSidebar} to="/faq">
          F.A.Q
        </Link>
        <img src={Logo} alt="Headshot-on-the-go" />
      </SidebarContent>
    </SidebarContainer>
  )
}

function CollapseLinks({title, children}) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleSubMenu() {
    setIsOpen(!isOpen);
  } 
  return (
    <div tabIndex="0" role="button" onKeyPress={toggleSubMenu} onClick={toggleSubMenu} className="CollapseContainer">
        <p>{title}</p>
        <div className="CollapseLinks" style={{"--CollapseLinks-Display": isOpen? "flex": null}}>
          {children}
        </div>
    </div>
  )
}

export default Sidebar
