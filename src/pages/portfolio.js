import React from "react"
import Gallery from "../components/Gallery"
import SEO from "../components/seo"
import PageTitle from "../PageComponents/PageTitle"

export default function PortfolioPage() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <SEO title="Our Work" />
      <PageTitle color>Our Work</PageTitle>
      <Gallery />
    </div>
  )
}
