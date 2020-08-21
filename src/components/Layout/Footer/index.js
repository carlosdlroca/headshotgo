import React from "react"
import { FooterContainer, Copyright } from "./Styles"

import TwitterSvg from "./twitter.svg"
import InstagramSvg from "./instagram.svg"
import FacebookSvg from "./facebook.svg"

export default function Footer() {
  return (
    <FooterContainer>
      <div id="footer-logo">Logo</div>
      <ul id="socialmedia">
        <h2>Follow us at: </h2>
        <li aria-label="Twitter">
          <a href="https://twitter.com">
            <TwitterSvg />
          </a>
        </li>
        <li aria-label="Instagram">
          <a href="https://instagram.com">
            <InstagramSvg />
          </a>
        </li>
        <li aria-label="Facebook">
          <a href="https://facebook.com">
            <FacebookSvg />
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
