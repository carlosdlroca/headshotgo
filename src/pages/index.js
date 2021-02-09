import React from "react"
import { graphql, Link } from "gatsby"

import SEO from "../components/seo"
import Button from "../components/Button"
import Header from "../PageComponents/LandingPage/Header"
import Gallery from "../components/Gallery"
import {
  SectionPrimary,
  SectionSecondary,
} from "../PageComponents/LandingPage/AlternatingSections"
import EfficientSvg from "../images/illustrations/efficient.svg"
import AffordableSvg from "../images/illustrations/affordable.svg"
import MobileSvg from "../images/illustrations/mobile.svg"

const IndexPage = ({ data }) => {
  return (
    <div>
      <SEO title="Home" />
      <Header />
      <SectionPrimary>
        <div className="Illustration">
          <EfficientSvg />
        </div>
        <div className="Content">
          <h1 className="Title">Efficient</h1>
          <span className="Text">
            Our process is very efficient, you contact us, you book with us, and
            you get your photos. Yes, it is that easy!
          </span>
          <Link to="/pricing">Book Now</Link>
        </div>
      </SectionPrimary>
      <SectionSecondary>
        <div className="Content">
          <h1 className="Title">Affordable</h1>
          <span className="Text">
            Our prices are what separate us from our competition. As students
            ourselves, we understand how expensive college can be. Our goal is
            to help every student have a professional image regardless of their
            financial status.
          </span>
          <Link to="/pricing">View Prices</Link>
        </div>
        <div className="Illustration">
          <AffordableSvg />
        </div>
      </SectionSecondary>
      <SectionPrimary color="#6D28D9" buttonColor="#4ADE80">
        <div className="Illustration">
          <MobileSvg />
        </div>
        <div className="Content">
          <h1 className="Title">Mobile</h1>
          <span className="Text">
            Being mobile allows us to reach more students in LA County. It also
            allows us to provide our services out in the open, which helps you
            feel more comfortable and makes the session more fun!
          </span>
          <Link to="/faq">Learn More</Link>
        </div>
      </SectionPrimary>
      <Gallery />
    </div>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        bookingLink
      }
    }
  }
`
export default IndexPage
