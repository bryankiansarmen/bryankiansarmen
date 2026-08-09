import * as Styled from "./Footer.style";

const Footer = () => {
  return (
    <Styled.Footer role="contentinfo">
      <Styled.FooterText>Bryan Kian Sarmen — Software Engineer</Styled.FooterText>
      <Styled.FooterCopy>© {new Date().getFullYear()} — Designed & built</Styled.FooterCopy>
    </Styled.Footer>
  );
};

export default Footer;
