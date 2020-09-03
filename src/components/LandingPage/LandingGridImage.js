import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function LandingGridImage(props) {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativePath: { regex: "/landing/" } }) {
        edges {
          node {
            id
            name
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const match = data.allFile.edges.find(
    ({ node }) => props.imgName === node.name
  )
  if (!match) return <span>no image</span>

  const { node: { childImageSharp } = {} } = match
  return (
    <Img
      fluid={childImageSharp.fluid}
      {...props}
      objectFit="cover"
      className={props.imgName}
    />
  )
}
