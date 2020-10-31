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
        <h1>Our Customers Love Us</h1>
        <p>
          We aim to provide our customers with fast and professional photography
          services.
        </p>
      </ReviewHeader>
      <ReviewBoxes>
        {data.allReviewsJson.edges.map(
          ({ node: { text, author, authorImageName } }) => (
            <ReviewBox key={text}>
              {author && <ReviewBox.Author>{author}</ReviewBox.Author>}
              <span className="Title">Valued Customer</span>
              {text && <ReviewBox.Text>{text}</ReviewBox.Text>}
            </ReviewBox>
          )
        )}
      </ReviewBoxes>
    </ReviewsContainer>
  )
}
