import { Variants } from "framer-motion";
import * as Styled from "./Home.style";
import * as GlobalStyled from "../../global.style";
import { ArrowRight, Mail } from "lucide-react";
import resumePdf from "../../assets/resume.pdf";

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
      <Styled.HeroInner>
        <Styled.HeroContent
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Styled.HeroTag variants={itemVariants}>
            Available for opportunities
          </Styled.HeroTag>

          <Styled.HeroTitle id="hero-title" variants={itemVariants}>
            Bryan<br />Kian<em className="accent">.</em><br />Sarmen
          </Styled.HeroTitle>

          <Styled.HeroRole variants={itemVariants}>
            <span className="label">role_</span>
            <span>Software Engineer</span>
            <Styled.CursorBlink />
          </Styled.HeroRole>

          <Styled.HeroDescription variants={itemVariants}>
            I build performant, scalable web applications end to end from React and
            Next.js interfaces to Spring Boot, Node.js, and FastAPI backends. With{" "}
            {experienceYears}+ years across enterprise and product teams, I ship modern,
            accessible frontends backed by robust APIs and reliable server-side architecture.
          </Styled.HeroDescription>

          <Styled.ActionGroup variants={itemVariants}>
            <GlobalStyled.Button as="a" href={resumePdf} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }} aria-label="Download Resume" download="resume.pdf">
              Download Resume <ArrowRight size={16} style={{ marginLeft: "8px" }} aria-hidden="true" />
            </GlobalStyled.Button>
            <GlobalStyled.Button as="a" href="#contact" className="secondary" style={{ textDecoration: 'none' }} aria-label="Get in touch with me">
              <Mail size={16} style={{ marginRight: "8px" }} aria-hidden="true" /> Get in Touch
            </GlobalStyled.Button>
          </Styled.ActionGroup>
        </Styled.HeroContent>

        <Styled.HeroVisual
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Styled.CodeWindow>
            <Styled.CodeHeader>
              <span className="traffic">
                <Styled.Dot color="#6a6a68" />
                <Styled.Dot color="#9a9a94" />
                <Styled.Dot color="#c8c8c2" />
              </span>
              <Styled.CodeFilename>bk.spec.json</Styled.CodeFilename>
            </Styled.CodeHeader>
            <Styled.CodeBody>
              <Styled.CodeLine><Styled.Ln>1</Styled.Ln><Styled.Punct>{'{'}</Styled.Punct></Styled.CodeLine>
              <Styled.CodeLine><Styled.Ln>2</Styled.Ln>&nbsp;&nbsp;<Styled.Fn>"spec"</Styled.Fn><Styled.Punct>:</Styled.Punct> <Styled.Str>"bryan-kian-sarmen"</Styled.Str><Styled.Punct>,</Styled.Punct></Styled.CodeLine>
              <Styled.CodeLine><Styled.Ln>3</Styled.Ln>&nbsp;&nbsp;<Styled.Fn>"role"</Styled.Fn><Styled.Punct>:</Styled.Punct> <Styled.Str>"Software Engineer"</Styled.Str><Styled.Punct>,</Styled.Punct></Styled.CodeLine>
              <Styled.CodeLine><Styled.Ln>4</Styled.Ln>&nbsp;&nbsp;<Styled.Fn>"stack"</Styled.Fn><Styled.Punct>: [</Styled.Punct></Styled.CodeLine>
              <Styled.CodeLine><Styled.Ln>5</Styled.Ln>&nbsp;&nbsp;&nbsp;&nbsp;<Styled.Str>"Java"</Styled.Str><Styled.Punct>,</Styled.Punct> <Styled.Str>"Spring Boot"</Styled.Str><Styled.Punct>,</Styled.Punct></Styled.CodeLine>
              <Styled.CodeLine><Styled.Ln>6</Styled.Ln>&nbsp;&nbsp;&nbsp;&nbsp;<Styled.Str>"TypeScript"</Styled.Str><Styled.Punct>,</Styled.Punct> <Styled.Str>"React"</Styled.Str><Styled.Punct>,</Styled.Punct></Styled.CodeLine>
              <Styled.CodeLine><Styled.Ln>7</Styled.Ln>&nbsp;&nbsp;&nbsp;&nbsp;<Styled.Str>"Node.js"</Styled.Str><Styled.Punct>,</Styled.Punct> <Styled.Str>"Next.js"</Styled.Str></Styled.CodeLine>
              <Styled.CodeLine><Styled.Ln>8</Styled.Ln>&nbsp;&nbsp;<Styled.Punct>],</Styled.Punct></Styled.CodeLine>
              <Styled.CodeLine><Styled.Ln>9</Styled.Ln>&nbsp;&nbsp;<Styled.Fn>yearsXP</Styled.Fn><Styled.Punct>:</Styled.Punct> <Styled.Val>{experienceYears}</Styled.Val><Styled.Punct>,</Styled.Punct></Styled.CodeLine>
              <Styled.CodeLine><Styled.Ln>10</Styled.Ln>&nbsp;&nbsp;<Styled.Fn>openToWork</Styled.Fn><Styled.Punct>:</Styled.Punct> <Styled.Val>true</Styled.Val><Styled.Punct>,</Styled.Punct></Styled.CodeLine>
              <Styled.CodeLine><Styled.Ln>11</Styled.Ln>&nbsp;&nbsp;<Styled.Fn>remote</Styled.Fn><Styled.Punct>:</Styled.Punct> <Styled.Val>true</Styled.Val><Styled.Punct>,</Styled.Punct></Styled.CodeLine>
              <Styled.CodeLine><Styled.Ln>12</Styled.Ln>&nbsp;&nbsp;<Styled.Fn>base</Styled.Fn><Styled.Punct>:</Styled.Punct> <Styled.Str>"Bulacan, PH"</Styled.Str></Styled.CodeLine>
              <Styled.CodeLine><Styled.Ln>13</Styled.Ln><Styled.Punct>{'}'};</Styled.Punct></Styled.CodeLine>
              <Styled.CodeLine><Styled.Ln>14</Styled.Ln></Styled.CodeLine>
              <Styled.CodeLine><Styled.Ln>15</Styled.Ln><Styled.Cm>// ready to ship great things</Styled.Cm></Styled.CodeLine>
            </Styled.CodeBody>
          </Styled.CodeWindow>
        </Styled.HeroVisual>
      </Styled.HeroInner>
    </Styled.HeroSection>
  );
};

export default Home;
