import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FooterContainer, Copyright } from "./Styles"

import Logo from "../../images/HeadshotsOnTheGo.png"
import renderIcon from "../../utils/renderIcon"

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          links {
            linkType
            linkUrl
          }
        }
      }
    }
  `)

  const renderLinks = data => {
    const { links } = data.site.siteMetadata
    return links.map(({ linkType, linkUrl }) => (
      <li aria-label={linkType} key={linkType}>
        <a href={linkUrl}>{renderIcon(linkType)}</a>
      </li>
    ))
  }
  return (
    <FooterContainer>
      <div className="Logo">
        <img src={Logo} alt="Headshots on the go" />
      </div>
      <ul id="socialmedia">
        <h2>Follow us at: </h2>
        {renderLinks(data)}
      </ul>
      <Copyright>
        &copy;&nbsp;{new Date().getFullYear()}&nbsp; Headshot Go. All Rights
        Reserved
      </Copyright>
    </FooterContainer>
  )
}
