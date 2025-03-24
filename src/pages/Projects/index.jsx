import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import {
  ProjectsContainer,
  Content,
  Title,
  Disclaimer,
  ProjectsGrid,
  ProjectCard,
  ProjectImage,
  ProjectContent,
  TechStack,
  TechTag,
  ProjectLinks,
  ProjectLink,
} from './styles';
import { projectsData } from '../../data/projects';

const Projects = () => {
  return (
    <ProjectsContainer>
      <Content>
        <Title>My Projects</Title>
        <ProjectsGrid>
          {projectsData.map((project, index) => (
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
                  <ProjectLink
                    className="disabled-link"
                    href={project.live}
                    onClick="return false;"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
