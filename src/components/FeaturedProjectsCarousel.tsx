import { motion } from "framer-motion";
import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "styled-components";
import { projects } from "../utils/utils";
import { Swiper } from "swiper/react";

const StyledSwiper = styled.div`
  .swiper-button-next,
  .swiper-button-prev {
    color: ${({ theme }) => theme.accent};
  }

  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    color: ${({ theme }) => theme.text};
  }
`;

const CarouselContainer = styled.section`
  width: 100%;
  padding: 50px 20px;
  text-align: center;
  position: relative;
`;

const ProjectCard = styled(motion.a)`
  display: block;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  h3 {
    padding: 10px;
    background: ${({ theme }) => theme.accent};
    color: white;
  }
`;

const FeaturedProjects = () => {
  return (
    <CarouselContainer>
      <h2>Featured Projects</h2>
      <StyledSwiper>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectCard href={project.link} target="_blank">
                <img src={project.image} alt={project.title} />
                <h3>{project.title}</h3>
              </ProjectCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </StyledSwiper>
    </CarouselContainer>
  );
};

export default FeaturedProjects;
