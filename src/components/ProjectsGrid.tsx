import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Project } from "../utils/type";
import Typewriter from "typewriter-effect";
import Toast from "./Toast";

interface ProjectGridProps {
  projects: Project[];
  selectedCategory: string;
}

const ProjectGridContainer = styled.section`
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.text};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  text-align: center;
  transition: 0.3s;
  height: 100%;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.15);
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProjectOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

const ProjectInfo = styled.div`
  padding: 15px;
  font-size: 1.2rem;
  font-weight: bold;
`;

const ButtonWrapper = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
`;

const ProjectButton = styled(motion.button)`
  background: black;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s;
  width: 90%;

  &:hover {
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.background};
  }
`;

const ProjectGrid: React.FC<ProjectGridProps> = ({
  selectedCategory,
  projects,
}) => {
  const [isToastVisible, setIsToastVisible] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState("");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const handleViewProject = (project: Project) => {
    if (project.url === "in-view") {
      setToastMessage("This project is still in progress!");
      setIsToastVisible(true);
    } else {
      window.open(project.url, "_blank");
    }
  };

  return (
    <ProjectGridContainer>
      {filteredProjects.length === 0 ? (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("No projects found...")
              .pauseFor(3000)
              .deleteAll()
              .start();
          }}
          options={{ loop: true }}
        />
      ) : (
        <Grid>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.name} whileHover={{ scale: 1.05 }}>
              <ImageContainer>
                <ProjectImage src={project.image} alt={project.name} />
                <ProjectOverlay>{project.description}</ProjectOverlay>
              </ImageContainer>
              <ProjectInfo>{project.name}</ProjectInfo>
              <ButtonWrapper>
                <ProjectButton
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => handleViewProject(project)}
                >
                  View Project
                </ProjectButton>
              </ButtonWrapper>
            </ProjectCard>
          ))}
        </Grid>
      )}

      <Toast
        message={toastMessage}
        isVisible={isToastVisible}
        onClose={() => setIsToastVisible(false)}
        duration={5000}
      />
    </ProjectGridContainer>
  );
};

export default ProjectGrid;
