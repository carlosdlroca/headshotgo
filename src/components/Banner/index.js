import React, { useState } from "react"
import { Link } from "gatsby"
import StyledBanner from "./Styles"

export default function Banner() {
  const [closed, setClosed] = useState(false)

  return (
    <StyledBanner closed={closed}>
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
