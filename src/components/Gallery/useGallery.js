import { graphql, useStaticQuery } from "gatsby"

const useGallery = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
        nodes {
          id
          name
          publicURL
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  `)

  return data.allFile.nodes.map(node => ({
    ...node.childImageSharp,
    id: node.id,
    name: node.name,
    publicURL: node.publicURL,
  }))
}

export default useGallery
