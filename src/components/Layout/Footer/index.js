import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FooterContainer, Copyright } from "./Styles"

import Logo from "../../../images/HeadshotsOnTheGo.png"

import TwitterSvg from "../../../images/socialmedia/twitter.svg"
import InstagramSvg from "../../../images/socialmedia/instagram.svg"
import LinkedInSvg from "../../../images/socialmedia/linkedin.svg"
import FacebookSvg from "../../../images/socialmedia/facebook.svg"
import YoutubeSvg from "../../../images/socialmedia/youtube.svg"
import EmailSvg from "../../../images/socialmedia/email.svg"

const renderSvg = name => {
  switch (name) {
    case "instagram":
      return <InstagramSvg />
    case "facebook":
      return <FacebookSvg />
    case "linkedin":
      return <LinkedInSvg />
    case "email":
      return <EmailSvg />
    case "twitter":
      return <TwitterSvg />
    case "youtube":
      return <YoutubeSvg />
    default:
      return null
  }
}

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          socialMedia {
            instagram
            linkedin
            email
            facebook
          }
        }
      }
    }
  `)

  const renderLinks = data => {
    const { socialMedia } = data.site.siteMetadata
    return Object.keys(socialMedia).map(name => (
      <li aria-label={name} key={name}>
        <a href={socialMedia[name]}>{renderSvg(name)}</a>
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
