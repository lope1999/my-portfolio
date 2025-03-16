import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import FeaturedProjects from "../components/FeaturedProjectsCarousel";
import ProjectGrid from "../components/ProjectsGrid";
import { projectCategories } from "../utils/utils";
import { Title } from "../utils/utils";

const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 50px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 5px;
  }
`;

const FilterButton = styled.button`
  padding: 10px 15px;
  font-size: 1rem;
  border: 1px solid ${({ active, theme }) => (active ? theme.accent : theme.text)};
  cursor: pointer;
  border-radius: 5px;
  background: ${({ active, theme }) => (active ? theme.accent : theme.background)};
  color: ${({ active, theme }) => (active ? theme.text : theme.accent)};
  transition: 0.3s;
  box-shadow: ${({ active }) => (active ? "0px 4px 15px rgba(0, 0, 0, 0.2)" : "none")};

  &:hover {
    padding: 5px 10px;
    background: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.text};
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  }
`;


/** Button to show/hide the ProjectGrid */
const ShowMoreButton = styled.button`
  margin-top: 5px;
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.accent};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.text};
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  }
`;

/** Wrapper for the grid to animate collapse/expand */
const AnimatedGridWrapper = styled(motion.div)`
  width: 100%;
`;

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showMore, setShowMore] = useState(false);

  return (
    <ProjectsContainer id="projects">
      <Title>
        <span className="tag">&lt;h2&gt;</span>
        Projects
        <span className="tag">&lt;/h2&gt;</span>
      </Title>

      {/* Filter Buttons */}
      <FilterContainer>
        {projectCategories.map((category) => (
          <FilterButton
            key={category}
            active={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </FilterButton>
        ))}
      </FilterContainer>

      {/* Featured Projects Carousel */}
      <FeaturedProjects />

      {/* Show More / Show Less Button */}
      <ShowMoreButton onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show Less" : "Show More"}
      </ShowMoreButton>

      {/* AnimatePresence handles mounting/unmounting animations */}
      <AnimatePresence>
        {showMore && (
          <AnimatedGridWrapper
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProjectGrid selectedCategory={selectedCategory} />
          </AnimatedGridWrapper>
        )}
      </AnimatePresence>
    </ProjectsContainer>
  );
};

export default ProjectsSection;
