import * as Styled from "./Footer.style";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <Styled.Footer role="contentinfo">
      <Styled.SocialContainer>
        <a href="https://github.com/bryankiansarmen" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
          <Github size={20} aria-hidden="true" />
        </a>
        <a href="https://www.linkedin.com/in/bryankiansarmen/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
          <Linkedin size={20} aria-hidden="true" />
        </a>
        <a href="mailto:sarmenbryankian@gmail.com" aria-label="Email Me">
          <Mail size={20} aria-hidden="true" />
        </a>
      </Styled.SocialContainer>
      <p>Copyright &copy; {new Date().getFullYear()}, Bryan Kian Sarmen. All rights reserved.</p>
    </Styled.Footer>
  );
};

export default Footer;
