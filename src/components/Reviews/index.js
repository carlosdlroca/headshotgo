import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  ReviewsContainer,
  ReviewBoxes,
  ReviewHeader,
  ReviewBox,
} from "./Styles"

export default function Reviews() {
  const data = useStaticQuery(graphql`
    query {
      allReviewsJson {
        edges {
          node {
            author
            authorImageName
            text
          }
        }
      }
    }
  `)

  return (
    <ReviewsContainer>
      <ReviewHeader>
        <h1>All of out customers love our service</h1>
        <p>
          We aim to provide our customers with fast and professional photography
          services.
        </p>
      </ReviewHeader>
      <ReviewBoxes>
        {data.allReviewsJson.edges.map(
          ({ node: { text, author, authorImageName } }) => (
            <ReviewBox>
              {author && <ReviewBox.Author>{author}</ReviewBox.Author>}
              {authorImageName && (
                <ReviewBox.Image>{authorImageName}</ReviewBox.Image>
              )}
              {text && <ReviewBox.Text>{text}</ReviewBox.Text>}
            </ReviewBox>
          )
        )}
      </ReviewBoxes>
    </ReviewsContainer>
  )
}
