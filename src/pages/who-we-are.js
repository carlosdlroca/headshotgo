import React from "react"
import { Link, graphql } from "gatsby"
import PageTitle from "../components/Pages/PageTitle"

export default function WhoWeArePage({ data }) {
  return (
    <div>
      <PageTitle>Who are are</PageTitle>
    </div>
  )
}

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
