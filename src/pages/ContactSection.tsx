import React, { useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Button from "../components/Button";
import { Description, Title } from "../utils/utils";
import emailjs from "emailjs-com";
import Toast from "../components/Toast";
import { ToastType } from "../utils/type";

const ContactContainer = styled(motion.section)`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  width: 100%;
  min-height: 80vh;
  padding: 40px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.background};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FormWrapper = styled(motion.div)`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MapWrapper = styled(motion.div)`
  flex: 1;
  min-height: 400px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    margin-top: 20px;
    min-height: 300px;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const InputField = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1rem;
  outline: none;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
`;

const TextArea = styled.textarea`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1rem;
  resize: vertical;
  outline: none;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
`;

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<ToastType>("info");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || "",
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "",
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY || ""
      )
      .then(
        () => {
          setToastType("success");
          setToastMessage(
            "Your message has been sent successfully! Expect a feedback real soon.😀"
          );
          setToastVisible(true);

          if (formRef.current) {
            formRef.current.reset();
          }
        },
        () => {
          setToastType("error");
          setToastMessage("Oops! Something went wrong, please try again.");
          setToastVisible(true);
        }
      );
  };

  return (
    <ContactContainer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="contact"
    >
      <FormWrapper>
        <Title
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="tag">&lt;h2&gt;</span>
          Get in Touch
          <span className="tag">&lt;/h2&gt;</span>
        </Title>

        <Description>
          <span className="tag">&lt;p&gt;</span>I am open to freelance
          opportunities, startups, and large-scale projects. However, if you
          have any other requests or questions, kindly fill the form below and I
          will be happy to respond.
          <span className="tag">&lt;/p&gt;</span>
        </Description>

        <ContactForm ref={formRef} onSubmit={handleSubmit}>
          <InputField placeholder="Name" type="text" name="name" required />
          <InputField placeholder="Email" type="email" name="email" required />
          <InputField
            placeholder="Subject"
            type="text"
            name="subject"
            required
          />
          <TextArea placeholder="Message" name="message" rows={5} required />
          <Button type="submit">Send Message</Button>
        </ContactForm>
      </FormWrapper>

      <MapWrapper
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7927.440829632521!2d3.38531789494071!3d6.556935523744705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d7e0016f285%3A0x8d7bbd27a2060c4f!2sGbagada%2C%20Lagos%20105102%2C%20Lagos!5e0!3m2!1sen!2sng!4v1741881243146!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{
            border: 0,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
          }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </MapWrapper>

      <Toast
        type={toastType}
        message={toastMessage}
        isVisible={toastVisible}
        onClose={() => setToastVisible(false)}
        duration={3000}
      />
    </ContactContainer>
  );
};

export default ContactSection;
