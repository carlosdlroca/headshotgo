import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import PageTitle from "../PageComponents/PageTitle"
import { ContactPageContainer } from "../PageComponents/Contact"
import { Form, InputGroup, Label, Input, TextArea } from "../components/Form"
import Button from "../components/Button"

import renderIcon from "../utils/renderIcon"

export default function ContactPage({ data }) {
  return (
    <ContactPageContainer>
      <SEO title="Contact" />
      <PageTitle color>Contact Us</PageTitle>
      <Form name="contact" method="POST" data-netlify="true" action="/contact">
        <input type="hidden" name="form-name" value="contact" />
        <InputGroup>
          <Label>
            Name
            <Input type="text" name="name" required />
          </Label>
        </InputGroup>
        <InputGroup>
          <Label>
            Email
            <Input type="email" name="email" required />
          </Label>
        </InputGroup>
        <InputGroup>
          <Label>
            Phone Number
            <Input type="tel" name="phone-number" required />
          </Label>
        </InputGroup>
        <InputGroup>
          <Label>
            Message
            <TextArea
              name="message"
              required
              placeholder="Ask us anything..."
            ></TextArea>
          </Label>
        </InputGroup>
        <InputGroup>
          <Button>Submit</Button>
        </InputGroup>
      </Form>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "5rem auto 1rem",
          width: "min(30rem, 80vw)",
        }}
      >
        {data.site.siteMetadata.links.map(({ linkType, linkUrl }) => (
          <a href={linkUrl}>{renderIcon(linkType)}</a>
        ))}
      </div>
    </ContactPageContainer>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        links {
          linkType
          linkUrl
        }
      }
    }
  }
`
