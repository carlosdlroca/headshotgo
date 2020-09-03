import React, { useCallback } from "react"
import { graphql, Link } from "gatsby"

import SEO from "../components/seo"
import Card from "../components/Card"
import FullWidth from "../components/FullWidth"
import satisfactionPng from "../images/satisfaction_guarantee.png"
import TextContainer from "../components/TextContainer"
import Button from "../components/Button"
import { FeaturesContainer, Feature } from "../components/Features"
import { ImageGrid, MiddleContent } from "../components/LandingPage"

import { FadeInContainer } from "../components/Animations/FadeIn"

import ChoicesSvg from "../images/illustrations/choices-colour.svg"
import UnlockSvg from "../images/illustrations/unlock.svg"
import LevelUpSvg from "../images/illustrations/lifting-colour.svg"
import BlobBlue from "../images/illustrations/BlobBlue.svg"
import BlobPurple from "../images/illustrations/BlobPurple.svg"

import LandingGridImage from "../components/LandingPage/LandingGridImage"

const IndexPage = ({ data }) => {
  const renderPriceCards = useCallback(() => {
    return data.allPricesJson.edges.map(
      ({ node: { price, packageName, color, id } }) => (
        <Card key={id} color={color}>
          <h1>{packageName} Package</h1>
          <p className="price">${price}</p>
          <Link className="pricing-link" to="/pricing">
            <Button>Learn more</Button>
          </Link>
        </Card>
      )
    )
  }, [data.allPricesJson.edges])
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
        <MiddleContent>
          <TextContainer>
            <FadeInContainer duration=".96s">
              <h1>We are Headshots-on-the-GO!</h1>
            </FadeInContainer>
            <p>{data.site.siteMetadata.description}</p>
            <Link to="/portfolio">
              <Button>Visit Portfolio</Button>
            </Link>
          </TextContainer>
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
              Aspernatur consequatur distinctio deleniti debitis consectetur
              dolor expl.
            </p>
          </Feature.Content>
        </Feature>
      </FeaturesContainer>

      <FullWidth>
        <h1>Check out our Packages</h1>
        <div className="cards">{renderPriceCards()}</div>
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
