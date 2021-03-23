import React from "react"

import SEO from "../../components/seo"
import TextContainer from "../../PageComponents/TextContainer"
import Button from "../../components/Button"
import { Link } from "gatsby"
import "./styles.css";

const NotFoundPage = () => (
  <div className="page-container">
    <SEO title="404: Not found" />
    <TextContainer>
      <h1>Oops! Incorrect Page!</h1>
      <p>Looks like we showed you an incorrect page.</p>
      <p>Please take a look at our work: </p>
      <Link to="/">
        <Button>Home</Button>
      </Link>
    </TextContainer>
  </div>
)

export default NotFoundPage
