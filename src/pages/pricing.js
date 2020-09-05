import React, { useCallback } from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import PageTitle from "../components/Pages/PageTitle"
import Button from "../components/Button"

import {
  PricingCards,
  PricingCard,
  PricingInfo,
} from "../components/Pages/pricing/PricingCard"
import { LocationInfo } from "../components/Pages/pricing/LocationInfo"

export default function Pricing({ data }) {
  const renderPrices = useCallback(() => {
    return data.allPricesJson.edges.map(
      ({
        node: { id, color, price, packageName, packageTagname, packageDetails },
      }) => (
        <PricingCard color={color} key={id}>
          <div className="Main">
            <h1>{packageTagname}</h1>
            <p>starting at</p>
            <p className="Price">${price}*</p>
            <a href={data.site.siteMetadata.bookingLink}>
              <Button
                bgColor={"#fff"}
                color={"var(--color-primary)"}
                aria-label="book now"
              >
                Book Now
              </Button>
            </a>
          </div>
          <PricingInfo>
            {packageDetails.map((detailString, index) => (
              <p key={index}>{detailString}</p>
            ))}
          </PricingInfo>
        </PricingCard>
      )
    )
  }, [data.site.siteMetadata.bookingLink, data.allPricesJson.edges])
  return (
    <div>
      <SEO title="Our Prices" />
      <PageTitle>Our Packages</PageTitle>
      <PricingCards>{renderPrices()}</PricingCards>
      <LocationInfo>
        <h1>Location Prices</h1>
        <ol>
          <li>
            UCLA/Westwood area, USC, LACC, LAFS, and other colleges/locations{" "}
            <strong>1-10 miles</strong> from KTLA, free
          </li>
          <li>
            <strong>11 - 30 miles</strong> from KTLA (
            <em>not including Westwood/UCLA area</em>
            ), I charge <strong>$0.25 / mile</strong>
          </li>
          <li>
            <strong>31 - 50 miles</strong> from KTLA, I charge{" "}
            <strong>$0.50 / mile</strong>
          </li>
        </ol>
        <p>
          <em>
            * Location cost will not apply if you bring 3 more friends with you
            to the shoot and have them book me on the same day.
          </em>
        </p>
      </LocationInfo>
    </div>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        bookingLink
      }
    }
    allPricesJson {
      edges {
        node {
          packageName
          packageTagname
          packageDetails
          id
          price
          color
        }
      }
    }
  }
`
