import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  Section,
  Container,
  Presentation,
  Title,
  Form,
  Input,
  TextArea,
  Button,
  PresentationImage,
} from "./styles";

import { Map } from "./components";

function Contact() {
  const form = useRef();

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successSend, setSuccessSend] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    emailjs
      .sendForm(
        "service_ihi3zvf",
        "template_ums39su",
        form.current,
        "VNXzDZNgz0f6r8sCx"
      )
      .then(
        () => {
          setSuccessSend(true);
          setIsLoading(false);
        },
        () => {
          setSuccessSend(false);
          setIsLoading(false);
        },

        setFormValues({ name: "", email: "", message: "" })
      );
  };

  return (
    <Section id="contact">
      <Container>
        <Presentation>
          <Form ref={form} onSubmit={handleSubmit}>
            <Title>Reach Me</Title>
            <Input
              placeholder="Name"
              type="text"
              id="name"
              name="name"
              value={formValues.name}
              onChange={handleChange}
            />
            <Input
              placeholder="Email"
              type="email"
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
            <TextArea
              placeholder="Write your message"
              rows={10}
              id="message"
              name="message"
              value={formValues.message}
              onChange={handleChange}
            />
            <Button type="submit">{isLoading ? "Sending..." : "Send"} </Button>
            {successSend &&
              "Your message has been sent. We´ll get back to you soon"}
          </Form>
        </Presentation>
        <PresentationImage>
          <Map />
        </PresentationImage>
      </Container>
    </Section>
  );
}

export default Contact;
