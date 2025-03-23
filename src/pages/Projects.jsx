import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsContainer = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  color: ${props => props.theme.colors.text};
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 3rem;
  text-align: center;
`;

const Disclaimer = styled.div`
  background-color: ${props => props.theme.colors.secondary}15;
  border-left: 4px solid ${props => props.theme.colors.secondary};
  padding: 1rem;
  margin-bottom: 2rem;
  border-radius: 0 4px 4px 0;
  color: ${props => props.theme.colors.text};
  font-size: 0.9rem;
  line-height: 1.5;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background-color: #f0f0f0;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;

  h3 {
    color: ${props => props.theme.colors.primary};
    margin-bottom: 0.5rem;
  }

  p {
    color: ${props => props.theme.colors.text};
    margin-bottom: 1rem;
    line-height: 1.6;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TechTag = styled.span`
  background-color: ${props => props.theme.colors.secondary};
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.875rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.colors.secondary};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
    image: "/projects/project1.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/yourusername/project1",
    live: "https://project1.com"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    image: "/projects/project2.jpg",
    technologies: ["React", "Firebase", "Material-UI"],
    github: "https://github.com/yourusername/project2",
    live: "https://project2.com"
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with React and styled-components, featuring smooth animations.",
    image: "/projects/project3.jpg",
    technologies: ["React", "Emotion", "Framer Motion"],
    github: "https://github.com/yourusername/project3",
    live: "https://project3.com"
  }
];

const Projects = () => {
  return (
    <ProjectsContainer>
      <Content>
        <Title>My Projects</Title>
        <Disclaimer>
          Note: The projects shown below are placeholders. Real projects will be added soon.
        </Disclaimer>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectImage>
                <img src={project.image} alt={project.title} />
              </ProjectImage>
              <ProjectContent>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <TechStack>
                  {project.technologies.map((tech, techIndex) => (
                    <TechTag key={techIndex}>{tech}</TechTag>
                  ))}
                </TechStack>
                <ProjectLinks>
                  <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> GitHub
                  </ProjectLink>
                  <ProjectLink href={project.live} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Live Demo
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Content>
    </ProjectsContainer>
  );
};

export default Projects;