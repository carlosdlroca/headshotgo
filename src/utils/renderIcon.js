import React from "react"

import TwitterSvg from "../images/socialmedia/twitter.svg"
import InstagramSvg from "../images/socialmedia/instagram.svg"
import LinkedInSvg from "../images/socialmedia/linkedin.svg"
import FacebookSvg from "../images/socialmedia/facebook.svg"
import YoutubeSvg from "../images/socialmedia/youtube.svg"
import EmailSvg from "../images/socialmedia/email.svg"

export default function renderIcon(linkType) {
  switch (linkType) {
    case "twitter":
      return <TwitterSvg />
    case "instagram":
      return <InstagramSvg />
    case "linkedin":
      return <LinkedInSvg />
    case "facebook":
      return <FacebookSvg />
    case "youtube":
      return <YoutubeSvg />
    case "email":
      return <EmailSvg />
    default:
      return null
  }
}
