import React from "react"
import Gallery from "../components/Gallery"
import SEO from "../components/seo"
import PageTitle from "../components/Pages/PageTitle"

export default function PortfolioPage() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <SEO title="Our Work" />
      <PageTitle>Our Work</PageTitle>
      <Gallery />
    </div>
  )
}
