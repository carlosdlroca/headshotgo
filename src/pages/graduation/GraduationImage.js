import React from 'react';
import { graphql, useStaticQuery} from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"

export default function GraduationImage({name, ...imageProps}) {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "graduation"}}) {
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
  `);

  const foundImage = data.allFile.nodes.filter(({name: imageName}) => imageName === name)[0];
  if(!foundImage) return null;
  return <GatsbyImage alt={name} image={foundImage.childImageSharp.gatsbyImageData} {...imageProps} />;
}