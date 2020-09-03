import React, { useCallback } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import SEO from "../components/seo"
import PageTitle from "../components/Pages/PageTitle"
import Button from "../components/Button"

const PricingCards = styled.div`
  display: grid;
  grid-row-gap: 3rem;
  width: 65%;
  margin: 10rem auto;

  @media only screen and (max-width: 31.25em) {
    width: 97%;
  }

  @media only screen and (min-width: 65em) {
    width: min(90%, 110rem);
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 4rem;
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
      text-align: center;
      font-size: 2.1rem;
      margin-bottom: 2rem;
    }

    h2 {
      font-size: 1.7rem;
    }

    p {
      line-height: 1.3;
      font-size: 1.4rem;
      text-align: center;
    }
    .Price {
      text-align: center;
      font-size: 4.5rem;
    }
  }
  button {
    position: absolute;
    bottom: -2rem;
    left: calc(50% - 6.6rem);
    border: 0.2rem solid ${({ color }) => color};
  }

  @media only screen and (max-width: 31.25em) {
    & > *:not(:last-child) {
      margin-bottom: 2rem;
    }
  }

  @media only screen and (min-width: 65em) {
    &:nth-of-type(2n) {
      transform: translateY(-4rem);
    }
  }
`

const PricingInfo = styled.div`
  background: white;
  color: var(--color-text-light);
  font-size: 1.6rem;
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
