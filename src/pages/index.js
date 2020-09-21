import React from "react"
import { graphql, Link } from "gatsby"

import SEO from "../components/seo"
import FullWidth from "../components/FullWidth"
import PageTitle from "../PageComponents/PageTitle"
import satisfactionPng from "../images/satisfaction_guarantee.png"
import TextContainer from "../PageComponents/TextContainer"
import Button from "../components/Button"
import { ImageGrid, MiddleContent } from "../PageComponents/LandingPage"

import LandingGridImage from "../PageComponents/LandingPage/LandingGridImage"

const IndexPage = ({ data }) => {
  return (
    <div>
      <SEO title="Home" />
      <ImageGrid>
        <LandingGridImage imgName="Image1" />
        <LandingGridImage imgName="Image2" />
        <LandingGridImage imgName="Image3" />
        <LandingGridImage imgName="Image4" />
        <LandingGridImage imgName="Image5" />
        <LandingGridImage imgName="Image6" />
        <LandingGridImage imgName="Image7" />
        <LandingGridImage imgName="Image8" />
        <LandingGridImage imgName="Image9" />
        <LandingGridImage imgName="Image10" />
        <MiddleContent>
          <PageTitle>We are Headshots-on-the-GO!</PageTitle>

          <p>{data.site.siteMetadata.description}</p>
          <Link to="/portfolio">
            <Button>Visit Portfolio</Button>
          </Link>
        </MiddleContent>
      </ImageGrid>

      <FullWidth>
        <PageTitle>Ready to Sign up?</PageTitle>
        <Link to="/pricing">
          <Button>View our Prices</Button>
        </Link>
      </FullWidth>

      <img
        src={satisfactionPng}
        alt="Satisfaction Guaranteed"
        style={{
          width: "25rem",
          margin: "2rem auto",
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
    allPricesJson {
      edges {
        node {
          id
          color
          price
          packageName
        }
      }
    }
  }
`

export default IndexPage
