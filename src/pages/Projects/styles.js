import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const ProjectsContainer = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  color: ${props => props.theme.colors.text};

  .disabled-link {
    pointer-events: none;
    color: gray;
    cursor: not-allowed;
  }
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 3rem;
  text-align: center;
`;

export const Disclaimer = styled.div`
  background-color: ${props => props.theme.colors.secondary}15;
  border-left: 4px solid ${props => props.theme.colors.secondary};
  padding: 1rem;
  margin-bottom: 2rem;
  border-radius: 0 4px 4px 0;
  color: ${props => props.theme.colors.text};
  font-size: 0.9rem;
  line-height: 1.5;
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

export const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ProjectImage = styled.div`
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

export const ProjectContent = styled.div`
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

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const TechTag = styled.span`
  background-color: ${props => props.theme.colors.secondary};
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.875rem;
`;

export const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ProjectLink = styled.a`
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
