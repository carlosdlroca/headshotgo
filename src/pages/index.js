import React from "react"
import { graphql, Link } from "gatsby"

import SEO from "../components/seo"
import Jumbotron from "../components/Jumbotron"
import Card from "../components/Card"
import FullWidth from "../components/FullWidth"
import satisfactionPng from "../images/satisfaction_guarantee.png"
import TextContainer from "../components/TextContainer"
import Button from "../components/Button"

const IndexPage = ({ data }) => (
  <div>
    <SEO title="Home" />
    <TextContainer>
      <h1>We are Headshots-on-the-GO!</h1>
      <p>{data.site.siteMetadata.description}</p>
      <Link to="/portfolio">
        <Button>Visit Portfolio</Button>
      </Link>
    </TextContainer>
    <FullWidth>
      <h1>Check out our Packages</h1>
      <div className="cards">
        <Card>
          <h1>Undergraduate</h1>
          <p className="price">$35.75</p>
          <Link className="pricing-link" to="/pricing">
            Learn more
          </Link>
          <a href={data.site.siteMetadata.bookingLink}>
            <button>Book Now</button>
          </a>
        </Card>
        <Card>
          <h1>Graduate</h1>
          <p className="price">$55.75</p>
          <Link className="pricing-link" to="/pricing">
            Learn more
          </Link>
          <a href={data.site.siteMetadata.bookingLink}>
            <button>Book Now</button>
          </a>
        </Card>
        <Card>
          <h1>Young Professional</h1>
          <p className="price">$85.75</p>
          <Link className="pricing-link" to="/pricing">
            Learn more
          </Link>
          <a href={data.site.siteMetadata.bookingLink}>
            <button>Book Now</button>
          </a>
        </Card>
      </div>
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
