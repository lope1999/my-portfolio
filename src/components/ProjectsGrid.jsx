import styled from "styled-components";
import { motion } from "framer-motion";
import { projects } from "../utils/utils";

const ProjectGridContainer = styled.section`
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  width: -webkit-fill-available
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

const ProjectGrid = ({ selectedCategory }) => {
  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <ProjectGridContainer>
      <Grid>
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectInfo>{project.title}</ProjectInfo>
          </ProjectCard>
        ))}
      </Grid>
    </ProjectGridContainer>
  );
};

export default ProjectGrid;
