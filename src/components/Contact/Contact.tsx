import React, { useState } from "react";
import * as GlobalStyled from "../../global.style";
import * as Styled from "./Contact.style";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

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
    <GlobalStyled.Section id="contact" aria-labelledby="contact-heading" style={{ paddingBottom: '140px' }}>
      <GlobalStyled.Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <GlobalStyled.SectionLabel>Get in touch</GlobalStyled.SectionLabel>
          <GlobalStyled.SectionHeader id="contact-heading">Let's work together.</GlobalStyled.SectionHeader>
          <GlobalStyled.SectionDesc>
            I'm open to full-stack and backend roles, freelance projects, and interesting collaborations. Drop me a line.
          </GlobalStyled.SectionDesc>
        </motion.div>

        <Styled.ContactInner>
          <Styled.FormWrapper
            onSubmit={handleSubmit}
            as={motion.form}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Styled.FormGroup>
              <Styled.FormLabel htmlFor="name">Name</Styled.FormLabel>
              <Styled.FormInput
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
                aria-required="true"
                autoComplete="name"
              />
            </Styled.FormGroup>

            <Styled.FormGroup>
              <Styled.FormLabel htmlFor="email">Email</Styled.FormLabel>
              <Styled.FormInput
                type="email"
                id="email"
                name="email"
                placeholder="you@email.com"
                required
                aria-required="true"
                autoComplete="email"
              />
            </Styled.FormGroup>

            <Styled.FormGroup>
              <Styled.FormLabel htmlFor="message">Message</Styled.FormLabel>
              <Styled.FormTextarea
                name="message"
                id="message"
                placeholder="Tell me about your project..."
                required
                aria-required="true"
                rows={5}
              />
            </Styled.FormGroup>

            <Styled.SubmitButton
              type="submit"
              disabled={status === "submitting"}
              aria-disabled={status === "submitting"}
            >
              {status === "submitting" ? "Sending..." : "Send message →"}
            </Styled.SubmitButton>

            <div aria-live="polite" className="sr-only">
              {status === "success" && "Message sent successfully! I will get back to you soon."}
              {status === "error" && "There was an error sending your message. Please try again."}
            </div>

            {status === "success" && (
              <Styled.StatusMessage $variant="success" aria-hidden="true">
                Message sent successfully! I'll be in touch soon.
              </Styled.StatusMessage>
            )}

            {status === "error" && (
              <Styled.StatusMessage $variant="error" aria-hidden="true">
                Something went wrong. Please check your API key or try again.
              </Styled.StatusMessage>
            )}
          </Styled.FormWrapper>

          <Styled.ContactInfo
            as={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Styled.ContactItem>
              <div>
                <Styled.ContactItemLabel>Email</Styled.ContactItemLabel>
                <Styled.ContactItemValue as="a" href="mailto:sarmenbryankian@gmail.com">
                  sarmenbryankian@gmail.com
                </Styled.ContactItemValue>
              </div>
            </Styled.ContactItem>

            <Styled.ContactItem>
              <div>
                <Styled.ContactItemLabel>Location</Styled.ContactItemLabel>
                <Styled.ContactItemValue>Manila, Philippines</Styled.ContactItemValue>
              </div>
            </Styled.ContactItem>

            <Styled.ContactItem>
              <div>
                <Styled.ContactItemLabel>Response time</Styled.ContactItemLabel>
                <Styled.ContactItemValue>Usually within 24 hours</Styled.ContactItemValue>
              </div>
            </Styled.ContactItem>

            <div>
              <Styled.ContactItemLabel style={{ marginBottom: '0.8rem' }}>Find me online</Styled.ContactItemLabel>
              <Styled.SocialRow>
                <Styled.SocialLink href="https://github.com/bryankiansarmen" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                  <Github size={18} />
                </Styled.SocialLink>
                <Styled.SocialLink href="https://www.linkedin.com/in/bryankiansarmen/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                  <Linkedin size={18} />
                </Styled.SocialLink>
                <Styled.SocialLink href="mailto:sarmenbryankian@gmail.com" aria-label="Email Me">
                  <Mail size={18} />
                </Styled.SocialLink>
              </Styled.SocialRow>
            </div>
          </Styled.ContactInfo>
        </Styled.ContactInner>

      </GlobalStyled.Container>
    </GlobalStyled.Section>
  );
};

export default Contact;
