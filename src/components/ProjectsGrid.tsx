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
  width: -webkit-fill-available;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    max-width: 768px;
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${({ theme }) => theme.accent};
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectInfo = styled.div`
  padding: 15px;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
`;

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const ProjectButton = styled(motion.button)`
  background: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.background};
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);

  &:hover {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    opacity: 0.9;
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
            <ProjectCard
              key={project.name}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectImage src={project.image} alt={project.name} />
              <ProjectInfo>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {project.name}
                  </span>
                  <ButtonWrapper>
                    <ProjectButton
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => handleViewProject(project)}
                    >
                      View Project
                    </ProjectButton>
                  </ButtonWrapper>
                </div>
              </ProjectInfo>
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
