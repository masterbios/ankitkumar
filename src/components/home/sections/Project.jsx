import React from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  color: ${props => props.theme.colors.secondary};
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme.colors.text};
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const TechTag = styled.span`
  background: ${props => props.theme.colors.primary}08;
  color: ${props => props.theme.colors.primary};
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.85rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const ProjectLink = styled.a`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

const projects = [
  {
    title: 'E-commerce Platform',
    description:
      'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
    image: '/projects/project1.jpg',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
    github: 'https://github.com/yourusername/ecommerce',
    demo: 'https://demo-ecommerce.com',
  },
  {
    title: 'Mobile Task Manager',
    description:
      'A cross-platform mobile app for task management built with React Native. Includes features like task creation, reminders, categories, and offline support.',
    image: '/projects/project2.jpg',
    tech: ['React Native', 'Firebase', 'Redux', 'AsyncStorage'],
    github: 'https://github.com/yourusername/taskmanager',
    demo: 'https://play.google.com/store/apps/details?id=com.taskmanager',
  },
  {
    title: 'Web Analytics Dashboard',
    description:
      'A real-time analytics dashboard for web applications. Built with modern web technologies and includes features like data visualization, user tracking, and custom reports.',
    image: '/projects/project3.jpg',
    tech: ['React', 'TypeScript', 'D3.js', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/yourusername/analytics',
    demo: 'https://demo-analytics.com',
  },
];

const Project = () => {
  return (
    <div>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <ProjectImage src={project.image} alt={project.title} />
          <ProjectContent>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <TechStack>
              {project.tech.map((tech, techIndex) => (
                <TechTag key={techIndex}>{tech}</TechTag>
              ))}
            </TechStack>
            <ProjectLinks>
              <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                <span>GitHub</span>
              </ProjectLink>
              <ProjectLink href={project.demo} target="_blank" rel="noopener noreferrer">
                <span>Live Demo</span>
              </ProjectLink>
            </ProjectLinks>
          </ProjectContent>
        </ProjectCard>
      ))}
    </div>
  );
};

export default Project;
