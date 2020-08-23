import React, { useCallback } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

const PricingCards = styled.div`
  display: grid;
  grid-row-gap: 3rem;
  width: 65%;
  margin: 0 auto;

  @media only screen and (min-width: 65em) {
    width: min(90%, 88.66rem);
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 1rem;
  }
`

const PricingCard = styled.div`
  box-shadow: 0.1rem 0.3rem 1rem rgba(0, 0, 0, 0.5);
  border-radius: 1rem;
  overflow: hidden;
  .Main {
    color: white;
    padding: 3rem 1.4rem;
    background-color: ${props => props.color};
    position: relative;
    line-height: 1.7;
    h1 {
      font-size: 2.5rem;
    }

    .Price {
      font-size: 2rem;
    }
  }
  button {
    background: white;
    color: var(--color-primary);
    font-size: 1.8rem;
    padding: 1rem 2rem;
    border-radius: 4rem;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    box-shadow: 0.1rem 0.4rem 1rem rgba(0, 0, 0, 0.5);
    &:hover {
      background-color: #eee;
      cursor: pointer;
    }
  }
`

const PricingInfo = styled.div`
  background: white;
  color: var(--color-text-dark);
  font-size: 1.8rem;
  line-height: 1.7;
  padding: 3.5rem 1rem 3rem;
  text-align: center;
`

const LocationInfo = styled.section`
  margin: 7rem 0 0;
  padding: 5rem;
  background: var(--color-quaternary);
  line-height: 1.8;
  font-size: 1.6rem;
  h1 {
    font-size: 2.5rem;
    text-align: center;
  }
  li {
    margin-bottom: 1rem;
  }
`

const pricingData = [
  {
    packageName: "Undergraduate",
    price: "35.75",
    color: "#5588EE",
  },
  {
    packageName: "Graduate",
    price: "55.75",
    color: "#5555EE",
  },
  {
    packageName: "Young Professional",
    price: "85.75",
    color: "#8855EE",
  },
]

export default function Pricing({ data }) {
  const renderPrices = useCallback(() => {
    return pricingData.map(({ packageName, color, price }) => (
      <PricingCard color={color}>
        <div className="Main">
          <h1>{packageName}</h1>
          <span className="Price">${price}</span>
          <a href={data.site.siteMetadata.bookingLink}>
            <button aria-label="book now">Book Now</button>
          </a>
        </div>
        <PricingInfo>
          <p>3 guaranteed images</p>
          <p>30 minute photoshoot</p>
          <p>2-3 business days delivery</p>
          <p>Location of choice (price varies)</p>
        </PricingInfo>
      </PricingCard>
    ))
  }, [data.site.siteMetadata.bookingLink])
  return (
    <div>
      <h1
        style={{
          fontSize: "3.4rem",
          textAlign: "center",
          color: "var(--color-primary)",
          margin: "3rem 0 5rem",
        }}
      >
        Our Packages
      </h1>
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
  }
`
