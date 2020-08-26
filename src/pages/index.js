import React, { useCallback } from "react"
import { graphql, Link } from "gatsby"

import SEO from "../components/seo"
import Card from "../components/Card"
import FullWidth from "../components/FullWidth"
import satisfactionPng from "../images/satisfaction_guarantee.png"
import TextContainer from "../components/TextContainer"
import Button from "../components/Button"

import { FadeInContainer } from "../components/Animations/FadeIn"

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
      <TextContainer>
        <FadeInContainer duration=".96s">
          <h1>We are Headshots-on-the-GO!</h1>
        </FadeInContainer>
        <p>{data.site.siteMetadata.description}</p>
        <Link to="/portfolio">
          <Button>Visit Portfolio</Button>
        </Link>
      </TextContainer>
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
