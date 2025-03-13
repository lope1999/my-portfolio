import styled from "styled-components";
import { motion } from "framer-motion";
import Button from "../components/Button";

const HeroContainer = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 20px;
  overflow-x: hidden;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  font-weight: bold;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-top: 10px;
`;

const HeroSection = () => {
  return (
    <HeroContainer
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Title
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Hi, I'm Suliat Titilope Alaga
      </Title>
      <Subtitle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Software Engineer | Entrepreneur | Creative Mind
      </Subtitle>
      <Button
        href="#projects"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        View My Work
      </Button>
    </HeroContainer>
  );
};

export default HeroSection;
