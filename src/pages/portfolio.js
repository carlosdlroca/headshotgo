import React from "react"
import Gallery from "../components/Gallery"
export default function PortfolioPage() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <h1
        style={{
          fontSize: "3.4rem",
          textAlign: "center",
          color: "var(--color-primary)",
          margin: "3rem 0 5rem",
        }}
      >
        Our Work
      </h1>
      <Gallery />
    </div>
  )
}
