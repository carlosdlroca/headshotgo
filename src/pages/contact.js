import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import PageTitle from "../PageComponents/PageTitle"
import {
  ContactPageContainer /*, ExtraInfo */,
} from "../PageComponents/Contact"
import { Form, InputGroup, Label, Input, TextArea } from "../components/Form"
import Button from "../components/Button"

import renderIcon from "../utils/renderIcon"

export default function ContactPage({ data }) {
  return (
    <ContactPageContainer>
      <SEO title="Contact" />
      <PageTitle color={"true"}>Contact Us</PageTitle>
      <Form
        id="contact-form"
        name="contact"
        method="POST"
        data-netlify="true"
        action="/contact"
      >
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

      {/* <ExtraInfo>
        <h1 className="MainTitle">Extra Information</h1>
        <div className="SubSection">
          <h2 className="SubTitle">Hours Of Operation</h2>
          <p className="SubText">
            I 
          </p>
        </div>
        <div className="SubSection">
          <h2 className="SubTitle">Second Title</h2>
          <p className="SubText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            numquam odit soluta veritatis, libero in incidunt nobis commodi quia
            quisquam ipsa! Quos, tempora non? Ratione possimus placeat
            distinctio praesentium minus!
          </p>
        </div>
        <div className="SubSection">
          <h2 className="SubTitle">Third Title</h2>
          <p className="SubText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            iure beatae perferendis facere a nam, consectetur, harum repellendus
            minus quia fugiat adipisci modi. Sunt inventore ratione, atque quas
            impedit tempore.
          </p>
        </div>
      </ExtraInfo> */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "12rem auto 1rem",
          width: "min(50rem, 80vw)",
        }}
      >
        {data.site.siteMetadata.links.map(({ linkType, linkUrl }) => (
          <a key={linkType} href={linkUrl}>
            {renderIcon(linkType)}
          </a>
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
