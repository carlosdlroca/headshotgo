import React from "react"
import { FooterContainer, Copyright } from "./Styles"

import TwitterSvg from "./twitter.svg"
import InstagramSvg from "./instagram.svg"
import LinkedInSvg from "./linkedin.svg"
import YoutubeSvg from "./youtube.svg"
import EmailSvg from "./email.svg"

export default function Footer() {
  return (
    <FooterContainer>
      <div id="footer-logo">Logo</div>
      <ul id="socialmedia">
        <h2>Follow us at: </h2>
        <li aria-label="Twitter">
          <a href="https://twitter.com/mayafilmz">
            <TwitterSvg />
          </a>
        </li>
        <li aria-label="Instagram">
          <a href="https://www.instagram.com/mayafilmz/">
            <InstagramSvg />
          </a>
        </li>
        <li aria-label="Linked In">
          <a href="https://www.linkedin.com/in/juan-maya-hernandez-075aa316b/">
            <LinkedInSvg />
          </a>
        </li>
        <li aria-label="Youtube">
          <a href="https://www.youtube.com/channel/UCOKvLVp6g2ID4pGJQgegc4A?view_as=subscriber/">
            <YoutubeSvg />
          </a>
        </li>
        <li aria-label="Email">
          <a href="mailto:mayafilmsphotovideo@gmail.com">
            <EmailSvg />
          </a>
        </li>
      </ul>
      <Copyright>
        &copy;&nbsp;{new Date().getFullYear()}&nbsp; Headshot Go. All Rights
        Reserved
      </Copyright>
    </FooterContainer>
  )
}
