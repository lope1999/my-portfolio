import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import FeaturedProjects from "../components/FeaturedProjectsCarousel";
import ProjectGrid from "../components/ProjectsGrid";
import { projectCategories } from "../utils/utils";
import { Title } from "../utils/utils";

/* Container Styles */
const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 50px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

/* Filter Container Styles */
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

/* Filter Button Styles */
const FilterButton = styled.button<{ active?: boolean }>`
  padding: 10px 15px;
  font-size: 1rem;
  border: 1px solid
    ${({ active, theme }) => (active ? theme.accent : theme.text)};
  cursor: pointer;
  border-radius: 5px;
  background: ${({ active, theme }) =>
    active ? theme.accent : theme.background};
  color: ${({ active, theme }) => (active ? theme.text : theme.accent)};
  transition: 0.3s;
  box-shadow: ${({ active }) =>
    active ? "0px 4px 15px rgba(0, 0, 0, 0.2)" : "none"};

  &:hover {
    padding: 5px 10px;
    background: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.text};
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  }
`;

/* Keyframes for moving gradient around the border */
const gradientFlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

/* Show More Button with a continuously moving gradient border */
const ShowMoreButton = styled(motion.button)`
  margin-top: 5px;
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
  color: ${({ theme }) => theme.accent};
  background: ${({ theme }) => theme.background};
  z-index: 1;
  overflow: hidden;
  border: ${({ theme }) => theme.background};

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 2px;
    border-radius: inherit;
    background: linear-gradient(
      270deg,
      ${({ theme }) => theme.accent} 0%,
      rgb(243, 193, 243) 50%,
      ${({ theme }) => theme.accent} 100%
    );
    background-size: 200% 200%;
    animation: ${gradientFlow} 3s ease-in-out infinite;
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 4px;
    border-radius: inherit;
    background: ${({ theme }) => theme.background};
    z-index: -1;
  }

  &:hover {
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.accent};
  }
`;

/* Wrapper for the grid to animate collapse/expand */
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
