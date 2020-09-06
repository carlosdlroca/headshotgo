import React from "react"
import { graphql, Link } from "gatsby"

import SEO from "../components/seo"
import FullWidth from "../components/FullWidth"
import PageTitle from "../components/Pages/PageTitle"
import satisfactionPng from "../images/satisfaction_guarantee.png"
import TextContainer from "../components/TextContainer"
import Button from "../components/Button"
import { FeaturesContainer, Feature } from "../components/Features"
import { ImageGrid, MiddleContent } from "../components/LandingPage"

import ChoicesSvg from "../images/illustrations/choices-colour.svg"
import UnlockSvg from "../images/illustrations/unlock.svg"
import LevelUpSvg from "../images/illustrations/lifting-colour.svg"
import BlobBlue from "../images/illustrations/BlobBlue.svg"
import BlobPurple from "../images/illustrations/BlobPurple.svg"

import LandingGridImage from "../components/LandingPage/LandingGridImage"

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
        <div className="Image10"></div>
        <MiddleContent>
          <PageTitle>We are Headshots-on-the-GO!</PageTitle>

          <p>{data.site.siteMetadata.description}</p>
          <Link to="/portfolio">
            <Button>Visit Portfolio</Button>
          </Link>
        </MiddleContent>
      </ImageGrid>

      <FeaturesContainer>
        <TextContainer>
          <h1>Why Headshot photography?</h1>
        </TextContainer>
        <Feature>
          <div className="Illustration">
            <ChoicesSvg />
            <BlobBlue />
          </div>
          <Feature.Content>
            <h1>Tell a Story</h1>
            <p>
              This is text about some content that i think you would like to
              learn about
            </p>
          </Feature.Content>
        </Feature>
        <Feature>
          <div className="Illustration">
            <UnlockSvg />
            <BlobPurple />
          </div>
          <Feature.Content>
            <h1>Unlock New Possibilities</h1>
            <p>
              This is text about some content that i think you would like to
              learn about
            </p>
          </Feature.Content>
        </Feature>
        <Feature>
          <div className="Illustration">
            <LevelUpSvg />
            <BlobBlue />
          </div>
          <Feature.Content>
            <h1>Level up your career</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur.
            </p>
          </Feature.Content>
        </Feature>
      </FeaturesContainer>

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
