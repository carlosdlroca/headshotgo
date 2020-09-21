import React from "react"
import SEO from "../components/seo"
import PageTitle from "../PageComponents/PageTitle"
import { ContactPageContainer } from "../PageComponents/Contact"
import { Form, InputGroup, Label, Input, TextArea } from "../components/Form"
import Button from "../components/Button"

export default function ContactPage() {
  return (
    <ContactPageContainer>
      <SEO title="Contact" />
      <PageTitle>Contact Us</PageTitle>
      <Form name="contact" method="POST" data-netlify="true" action="/contact">
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
    </ContactPageContainer>
  )
}
