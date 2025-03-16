import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import Button from "../components/Button";
import Typewriter from "typewriter-effect";
import { shapes } from "../utils/utils";

const floatAnimation = keyframes`
  0% { transform: translateY(0) }
  50% { transform: translateY(-20px) }
  100% { transform: translateY(0) }
`;

const HeroContainer = styled(motion.section)`
  position: relative; /* Needed for absolutely positioned shapes */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 20px;
  overflow: hidden; /* Hide any shapes that move off-screen */
`;

const AnimatedShape = styled(motion.div)`
  position: absolute;
  width: 60px;
  height: 60px;
  background-color: ${({ theme }) => theme.accent || "#8B5E3C"};
  border-radius: 50%;
  opacity: 0.2;
  animation: ${floatAnimation} 6s ease-in-out infinite;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const HeroSection: React.FC = () => {
  return (
    <HeroContainer
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {shapes.map((shape, index) => (
        <AnimatedShape
          key={index}
          initial={shape.initial}
          animate={shape.animate}
          transition={shape.transition}
          style={shape.style}
        />
      ))}

      <Title
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Hi, I'm Suliat Titilope Alaga")
              .pauseFor(1200)
              .deleteAll()
              .typeString("Software Engineer | Entrepreneur | Creative Mind")
              .start();
          }}
          options={{
            loop: true,
          }}
        />
      </Title>

      <Button
        href="#projects"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{ marginTop: "1.5rem" }}
      >
        View My Work
      </Button>
    </HeroContainer>
  );
};

export default HeroSection;
