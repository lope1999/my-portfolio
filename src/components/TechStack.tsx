import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { techStacks, Title } from "../utils/utils";

const TechContainer = styled.section`
  text-align: center;
  padding: 80px 20px;
  background: ${({ theme }) => theme.background};
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 40px;
  justify-items: center;
  margin-top: 20px;
`;

const TechItem = styled(motion.div)`
  /* Gives us space for 3D transformations */
  perspective: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2rem;
  cursor: pointer;

  svg {
    font-size: 3rem;
    color: ${({ theme }) => theme.accent};
    transform-style: preserve-3d;
  }
`;

const TechName = styled.div`
  margin-top: 10px;
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
`;

const TechStack: React.FC = () => {
  return (
    <TechContainer id="tech">
      <Title>
        <span className="tag">&lt;h2&gt;</span>
        Tech Stack
        <span className="tag">&lt;/h2&gt;</span>
      </Title>{" "}
      <TechGrid>
        {techStacks.map((tech, index) => {
          const IconComponent = tech.icon as React.ElementType;
          return (
            <TechItem
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                type: "spring",
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{
                  rotateY: [0, 360],
                  y: [0, -5, 0],
                }}
                transition={{
                  rotateY: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 2,
                    delay: index * 0.3,
                    ease: "linear",
                  },
                  y: {
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  },
                }}
              >
                <IconComponent color={tech.color} />
              </motion.div>
              <TechName>{tech.name}</TechName>
            </TechItem>
          );
        })}
      </TechGrid>
    </TechContainer>
  );
};

export default TechStack;
