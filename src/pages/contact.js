import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import PageTitle from "../PageComponents/PageTitle"
import {
  ContactPageContainer,
  ContactInfo
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
      
      <ContactInfo color="var(--color-primary)">
        <h1>The graduation portrait experience</h1>
        <p>&emsp;You might have taken graduation pictures in high school, but a session that highlights your college career will mean much more to you and your loved ones! Each package includes a free headshot to prepare you for your professional career!</p>
        <p>&emsp;As a current UCLA undergraduate student, I understand the hard work that it takes to graduate. Congratulations!! You did it! This is a BIG accomplishment!</p>
        <p>&emsp;I want to invite you to book with me and allow me to capture these moments for you! I have been taking photos since 2016, and have worked with artists such as Damian Lemar Hudson, Leo Black, have worked with startups, photographed Blackstone LaunchPad events, and accumulated 100K+ likes, 6.1k+ followers on TikTok, 85k+ video views on YouTube, 8.4k+ followers on Instagram and 4k+ karma on Reddit!</p>
        <h1></h1>
      </ContactInfo>

      <ContactInfo color="#66FF77">
        <h1>Campus Locations</h1>
        <p>
          &emsp;I am based in Mid City, Los Angeles but I would love to travel to you wherever you are in Southern California!
        </p>
        <p>
          &emsp;The majority of my photoshoots are for my community at UCLA, but I am always looking to expand my network to other college campuses including:
          <ul>
            <li>USC</li>
            <li>CSU Los Angeles</li>
            <li>CSU Long Beach</li>
          </ul>
        </p>
        <p>
          And much more! Let me know how I could help!
        </p>
      </ContactInfo>

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
