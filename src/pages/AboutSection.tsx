import { useScroll, useTransform, motion } from "framer-motion";
import styled from "styled-components";
import { SULIAT_01 } from "../assets/index";
import { Description, Title } from "../utils/utils";

const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 150vh;
  text-align: center;
  padding: 80px 50px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  overflow-x: hidden;
  position: relative;

  @media (max-width: 768px) {
    padding: 30px 10px;
    height: 100vh;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GlowRing = styled(motion.div)`
  position: absolute;
  width: 520px;
  height: 520px;
  border-radius: 50%;
  background: radial-gradient(rgba(255, 255, 255, 0.15), transparent);
  box-shadow: 0 0 40px rgba(255, 255, 255, 0.1);
  z-index: -1;

  @media (max-width: 768px) {
    width: 270px;
    height: 270px;
  }
`;

const ImageContainer = styled(motion.div)`
  width: 500px;
  height: 500px;
  overflow: hidden;
  border-radius: 50%;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3);
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    scale: 1.05;
    rotate: 10deg;
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;

    &:hover {
      scale: 1.05;
      rotate: 12deg;
    }
  }
`;

const TextContainer = styled(motion.div)`
  max-width: 600px;
  margin-top: 20px;
  font-size: 1.2rem;
  line-height: 1.5;
  padding: 20px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Divider = styled.div`
  width: 80px;
  height: 4px;
  background: ${({ theme }) => theme.primary};
  margin: 10px auto;
  border-radius: 2px;
`;

const AboutSection = () => {
  const { scrollYProgress } = useScroll();

  // Parallax + Fade transforms
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [0, 0.5, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-30, 60]);
  const glowScale = useTransform(scrollYProgress, [0, 1], [0.9, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <AboutContainer id="about">
      <ImageWrapper>
        <GlowRing style={{ scale: glowScale }} />
        <ImageContainer
          style={{ y, rotate }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img src={SULIAT_01} alt="Suliat Titilope Alaga" />
        </ImageContainer>
      </ImageWrapper>

      <TextContainer style={{ opacity, y: textY }}>
        <Title
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <span className="tag">&lt;h2&gt;</span>
          About Me
          <span className="tag">&lt;/h2&gt;</span>
        </Title>
        <Divider />
        <Description>
          <span className="tag">&lt;p&gt;</span>
          I&apos;m Suliat Titilope Alaga, a Software Engineer with years of
          experience building web-based applications, and tools for finance and
          security. I hold a First Class (Honours) Bachelor’s Degree in Computer
          Science and a Distinction National Diploma’s Degree in Data Processing
          . Additionally, I am proficient in HTML, CSS, JavaScript, Material UI,
          and Reactjs for frontend development, and have experience with
          Java(Springboot Framework) and Nestjs for backend development . I am a
          skilled full-stack developer and open to opportunities that would
          enable me work on diverse projects and support the vision of the
          company to deliver exceptional service without compromising standards.
          I'm confident, naturally curious, and perpetually working on improving
          my chops one design problem at a time.
          <span className="tag">&lt;/p&gt;</span>
        </Description>
      </TextContainer>
    </AboutContainer>
  );
};

export default AboutSection;
