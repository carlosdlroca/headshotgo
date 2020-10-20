import React from "react"

import TwitterSvg from "../images/socialmedia/twitter.svg"
import InstagramSvg from "../images/socialmedia/instagram.svg"
import LinkedInSvg from "../images/socialmedia/linkedin.svg"
import FacebookSvg from "../images/socialmedia/facebook.svg"
import YoutubeSvg from "../images/socialmedia/youtube.svg"
import EmailSvg from "../images/socialmedia/email.svg"
import PhoneSvg from "../images/socialmedia/phone.svg"

export default function renderIcon(linkType) {
  switch (linkType) {
    case "twitter":
      return <TwitterSvg className="link-svg" />
    case "instagram":
      return <InstagramSvg className="link-svg" />
    case "linkedin":
      return <LinkedInSvg className="link-svg" />
    case "facebook":
      return <FacebookSvg className="link-svg" />
    case "youtube":
      return <YoutubeSvg className="link-svg" />
    case "email":
      return <EmailSvg className="link-svg" />
    case "phone":
      return <PhoneSvg className="link-svg" />
    default:
      return null
  }
}
