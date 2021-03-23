import React from 'react';
import Button from "../Button";
import "./styles.css";

export default function ContactForm() {
  return(
    <div className="contact-form-container">
      <form
        id="contact-form-general"
        name="contact-general"
        method="POST"
        data-netlify="true"
        action="/"
      >
        <h2 className="ContactTitle">Contact Us</h2>
        <div className="input-group">
          <label>
            <p>Name</p>
            <input type="text" name="name" required />
          </label>
        </div>
        <div className="input-group">
          <label>
            <p>Email</p>
            <input type="email" name="email" required/>
          </label>
        </div>
        <div className="input-group">
          <label>
            <p>Phone Number</p>
            <input type="tel" name="phoneNumber" />
          </label>
        </div>
        <div className="input-group">
          <label>
            <p>Question</p>
            <textarea name="question" required />
          </label>
        </div>
        <div className="input-group">
          <Button>Send</Button>
        </div>
      </form>
    </div>
  )
}