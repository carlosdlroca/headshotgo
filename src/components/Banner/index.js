import React, { useState } from "react"
import { Link } from "gatsby"
import StyledBanner from "./Styles"

export default function Banner() {
  const [closed, setClosed] = useState(false)

  return (
    <StyledBanner closed={closed}>
      <section className="Details">
        <h1 className="Title">Promotion! January 2021</h1>
        <p className="offer">
          <span className="package aff">Affordable</span> &{" "}
          <span className="package pop">Popular</span>packages
          <p> 21% off only in January 2021. Book Now</p>
        </p>
      </section>
      <section className="buttons">
        <Link to="/pricing">
          <button className="Link">View Pricing</button>
        </Link>
        <button
          className="Close"
          onClick={() => {
            setClosed(true)
          }}
        >
          Close
        </button>
      </section>
    </StyledBanner>
  )
}
