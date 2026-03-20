import React, { useState } from "react";
import * as GlobalStyled from "../../global.style";
import * as Styled from "./Contact.style";
import { motion } from "framer-motion";

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");

    const formData = new FormData(form);
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "";
    formData.append("access_key", accessKey);

    if (!accessKey) {
      console.warn("Web3Forms access key is missing. Form will not submit. Please add WEB3FORMS_ACCESS_KEY to your .env.local file.");
      setStatus("error");
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        form.reset();

        // Reset success message after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        console.error("Form submission failed", data);
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error", error);
      setStatus("error");
    }
  };

  return (
    <GlobalStyled.Section id="contact" aria-labelledby="contact-heading">
      <GlobalStyled.Container>
        <GlobalStyled.SectionHeader id="contact-heading">Get in Touch</GlobalStyled.SectionHeader>

        <Styled.ContentWrapper
          as={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Styled.FormWrapper onSubmit={handleSubmit}>

            <Styled.FormItemWrapper>
              <label htmlFor="name">
                Name <span className="required-indicator" aria-hidden="true">(required)</span>
              </label>
              <Styled.Input
                type="text"
                id="name"
                name="name"
                required
                aria-required="true"
                autoComplete="name"
              />
            </Styled.FormItemWrapper>

            <Styled.FormItemWrapper>
              <label htmlFor="email">
                Email <span className="required-indicator" aria-hidden="true">(required)</span>
              </label>
              <Styled.Input
                type="email"
                id="email"
                name="email"
                required
                aria-required="true"
                autoComplete="email"
              />
            </Styled.FormItemWrapper>

            <Styled.FormItemWrapper>
              <label htmlFor="message">
                Message <span className="required-indicator" aria-hidden="true">(required)</span>
              </label>
              <Styled.TextArea
                name="message"
                id="message"
                required
                aria-required="true"
                rows={5}
              />
            </Styled.FormItemWrapper>

            <GlobalStyled.Button
              type="submit"
              disabled={status === "submitting"}
              aria-disabled={status === "submitting"}
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </GlobalStyled.Button>

            <div aria-live="polite" className="sr-only">
              {status === "success" && "Message sent successfully! I will get back to you soon."}
              {status === "error" && "There was an error sending your message. Please try again."}
            </div>

            {status === "success" && (
              <Styled.SuccessMessage aria-hidden="true">
                Message sent successfully! I'll be in touch soon.
              </Styled.SuccessMessage>
            )}

            {status === "error" && (
              <Styled.SuccessMessage aria-hidden="true" style={{ color: 'var(--color-error, #f44336)', backgroundColor: 'rgba(244, 67, 54, 0.1)' }}>
                Something went wrong. Please check your API key or try again.
              </Styled.SuccessMessage>
            )}

          </Styled.FormWrapper>
        </Styled.ContentWrapper>
      </GlobalStyled.Container>
    </GlobalStyled.Section>
  );
};

export default Contact;
