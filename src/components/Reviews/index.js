import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  ReviewsContainer,
  ReviewBoxes,
  ReviewHeader,
  ReviewBox,
} from "./Styles"
import QuoteSvg from "./quotes.svg"
import StarSvg from "./star.svg"

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
              <div className="Quote">
                <QuoteSvg />
              </div>
              {author && <ReviewBox.Author>{author}</ReviewBox.Author>}
              {authorImageName && (
                <ReviewBox.Image>{authorImageName}</ReviewBox.Image>
              )}
              {text && <ReviewBox.Text>{text}</ReviewBox.Text>}
              <div className="Stars">
                <StarSvg />
                <StarSvg />
                <StarSvg />
                <StarSvg />
                <StarSvg />
              </div>
            </ReviewBox>
          )
        )}
      </ReviewBoxes>
    </ReviewsContainer>
  )
}
