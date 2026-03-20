import { Variants } from "framer-motion";
import * as Styled from "./Home.style";
import * as GlobalStyled from "../../global.style";
import { ArrowRight, Mail } from "lucide-react";
import resumePdf from "../../assets/SARMEN, Bryan Kian (Resume).pdf";

const Home = () => {
  const calculateExperience = () => {
    const startYear = 2022; // Started in Aug 2022
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();

    let years = currentYear - startYear;
    // If it's before August, reduce the year calculation by 1
    if (currentMonth < 7) {
      years -= 1;
    }
    return Math.max(0, years);
  };

  const experienceYears = calculateExperience();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }
    },
  };

  return (
    <Styled.HeroSection id="home" aria-labelledby="hero-title">
      <GlobalStyled.Container>
        <Styled.HeroContent
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          <Styled.HeroTitle id="hero-title" variants={itemVariants}>
            I engineer resilient backend systems and dynamic <span>full-stack</span> applications.
          </Styled.HeroTitle>

          <Styled.HeroDescription variants={itemVariants}>
            I'm a Software Engineer with {experienceYears}+ years of experience modernizing enterprise platforms. I specialize in designing scalable APIs, automating complex data pipelines, and shipping production grade software that drives operational efficiency.
          </Styled.HeroDescription>

          <Styled.ActionGroup variants={itemVariants}>
            <GlobalStyled.Button as="a" href={resumePdf} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }} aria-label="Download Resume" download="SARMEN_Bryan_Kian_Resume.pdf">
              Download Resume <ArrowRight size={18} style={{ marginLeft: "8px" }} aria-hidden="true" />
            </GlobalStyled.Button>
            <GlobalStyled.Button as="a" href="#contact" className="secondary" style={{ textDecoration: 'none' }} aria-label="Get in touch with me">
              <Mail size={18} style={{ marginRight: "8px" }} aria-hidden="true" /> Get in Touch
            </GlobalStyled.Button>
          </Styled.ActionGroup>
        </Styled.HeroContent>
      </GlobalStyled.Container>
    </Styled.HeroSection>
  );
};

export default Home;
