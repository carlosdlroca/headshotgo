import React from "react"
import { graphql, Link } from "gatsby"

import SEO from "../components/seo"
import TextContainer from "../PageComponents/TextContainer"
import PageTitle from "../PageComponents/PageTitle"
import satisfactionPng from "../images/satisfaction_guarantee.png"
import Button from "../components/Button"
import {
  ImageGrid,
  MiddleContent,
} from "../PageComponents/LandingPage/ImageGrid"
import { WhyChooseUs } from "../PageComponents/LandingPage/WhyChooseUs"
import LandingGridImage from "../PageComponents/LandingPage/LandingGridImage"
import Reviews from "../components/Reviews"

import Rocket from "../images/illustrations/rocket.svg"
import Gears from "../images/illustrations/gears.svg"
import Bank from "../images/illustrations/bank.svg"

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
          <PageTitle>We are Headshots on the GO!</PageTitle>

          <p>{data.site.siteMetadata.description}</p>
          <Link to="/portfolio">
            <Button>Visit Portfolio</Button>
          </Link>
        </MiddleContent>
      </ImageGrid>

      <TextContainer style={{ marginTop: "5rem" }}>
        <h1>Why choose us?</h1>
      </TextContainer>

      <WhyChooseUs>
        <div className="Item">
          <h2 className="ItemTitle">Efficient</h2>
          <Gears className="ItemIcon" />
          <p className="ItemDescription">
            As college students, we know an hour of your day is too much to ask
            for, our photoshoots typically last 30-45 minutes. We make sure to
            maximize the number of photos through our sessions. We take 50+
            images per session to make sure we got the right photo.{" "}
          </p>
        </div>
        <div className="Item">
          <h2 className="ItemTitle">Affordable</h2>
          <Bank className="ItemIcon" />
          <p className="ItemDescription">
            College in itself is already expensive, why pay another $100 for a
            service you can get for a much cheaper price. Our most affordable
            package starts at $15 per image, and our fastest delivery package
            starts at $25 per image. Get the best bang for your buck at
            Headshots on the Go!
          </p>
        </div>
        <div className="Item">
          <h2 className="ItemTitle">Mobile</h2>
          <Rocket className="ItemIcon" />
          <p className="ItemDescription">
            We know scoping out for locations can be hard sometimes and studios
            might be intimidating. As implied by our name, Headshots on the Go,
            we offer mobile photography services, meaning that we go to the
            location of your choice. So you take control of your background,
            anywhere within 50 miles of Los Angeles County.
          </p>
        </div>
      </WhyChooseUs>

      <Reviews />

      <img
        loading="lazy"
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
