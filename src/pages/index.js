import React from "react"
import { graphql, Link } from "gatsby"

import SEO from "../components/seo"
import FullWidth from "../components/FullWidth"
import TextContainer from "../PageComponents/TextContainer"
import satisfactionPng from "../images/satisfaction_guarantee.png"
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
            As college students, we know an hour of your day is too much to ask
            for, our photoshoots typically last 30-45 minutes. We make sure to
            maximize the number of photos through our sessions. We take 50+
            images per session to make sure we got the right photo.{" "}
          </span>
          <Link to="/contact">Book Now</Link>
        </div>
      </SectionPrimary>

      <SectionSecondary>
        <div className="Content">
          <h1 className="Title">Affordable</h1>
          <span className="Text">
            College in itself is already expensive, why pay another $100 for a
            service you can get for a much cheaper price. Our most affordable
            package starts at $15 per image, and our fastest delivery package
            starts at $25 per image. Get the best bang for your buck at
            Headshots on the Go!
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
            We know scoping out for locations can be hard sometimes and studios
            might be intimidating. As implied by our name, Headshots on the Go,
            we offer mobile photography services, meaning that we go to the
            location of your choice. So you take control of your background,
            anywhere within 50 miles of Los Angeles County.
          </span>
          <Link to="/contact">Book Now</Link>
        </div>
      </SectionPrimary>

      <Gallery />

      <FullWidth>
        <TextContainer>
          <h1>Invest in your future</h1>

          <Link to="/pricing">
            <Button>Book Today</Button>
          </Link>
        </TextContainer>
      </FullWidth>

      <img
        src={satisfactionPng}
        alt="Satisfaction Guaranteed"
        style={{
          width: "35rem",
          margin: "2rem auto 10rem",
          display: "block",
        }}
      />
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
