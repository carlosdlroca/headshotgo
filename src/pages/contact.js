import React from "react"
import SEO from "../components/seo"
import { ContactPageContainer } from "../components/Pages/Contact"
import { Form, InputGroup, Label, Input, TextArea } from "../components/Form"
import Button from "../components/Button"

export default function ContactPage() {
  return (
    <ContactPageContainer>
      <SEO title="Contact" />
      <Form name="contact" method="POST" data-netlify="true">
        <InputGroup>
          <Label>
            Name
            <Input type="text" name="name" />
          </Label>
        </InputGroup>
        <InputGroup>
          <Label>
            Email
            <Input type="email" name="email" />
          </Label>
        </InputGroup>
        <InputGroup>
          <Label>
            Phone Number
            <Input type="tel" name="phone-number" />
          </Label>
        </InputGroup>
        <InputGroup>
          <Label>
            Message
            <TextArea name="message"></TextArea>
          </Label>
        </InputGroup>
        <InputGroup>
          <Button type="submit">Submit</Button>
        </InputGroup>
      </Form>
    </ContactPageContainer>
  )
}
