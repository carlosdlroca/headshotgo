import React from "react"
import Gallery from "../components/Gallery"
import SEO from "../components/seo"
import PageTitle from "../PageComponents/PageTitle"
import PageWrapper from "../PageComponents/PageWrapper"

export default function PortfolioPage() {
  return (
    <PageWrapper>
      <div style={{ minHeight: "100vh" }}>
        <SEO title="Our Work" />
        <PageTitle>Our Work</PageTitle>
        <Gallery />
      </div>
    </PageWrapper>
  )
}
