import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Snackbar } from "@mui/material";

import {
  Container,
  Wrapper,
  Title,
  Desc,
  ContactForm,
  ContactTitle,
  ContactInput,
  ContactButton,
  ContactInputMessage,
} from "./styles.js";

const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
const userId = import.meta.env.VITE_EMAIL_USER_ID;

const Contact = () => {
  //hooks
  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(serviceId, templateId, form.current, userId).then(
      (result) => {
        setOpen(true);
        form.current.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Get in touch</Title>
        <Desc>
          Let’s have a chat! You can write me a message below. I will get back
          to you.
        </Desc>

        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email</ContactTitle>
          <ContactInput placeholder="Name" type="text" name="name" required />
          <ContactInput
            placeholder="Email"
            type="email"
            name="email"
            required
          />
          <ContactInput
            placeholder="Subject"
            type="text"
            name="subject"
            required
          />
          <ContactInputMessage
            placeholder="Message"
            rows="4"
            name="message"
            required
          />
          <ContactButton type="submit" value="Send" />
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </Wrapper>
    </Container>
  );
};

export default Contact;
