import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const PageWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const HomeContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 2rem;
  min-height: 100vh;
  position: relative;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c3cfe2' fill-opacity='0.4'%3E%3Ccircle cx='15' cy='15' r='3'/%3E%3Cpath d='M15 0 L15 30 M0 15 L30 15' stroke='%23c3cfe2' stroke-width='2' stroke-opacity='0.4'/%3E%3C/g%3E%3C/svg%3E");
    background-size: 30px 30px;
    z-index: 0;
    animation: quantumFloat 20s linear infinite;
  }

  @keyframes quantumFloat {
    0% {
      transform: translateY(-100%) translateX(-50%) rotate(0deg);
      background-position: 0 0;
    }
    100% {
      transform: translateY(100%) translateX(50%) rotate(360deg);
      background-position: 30px 30px;
    }
  }

  @media (min-width: 1024px) {
    min-height: auto;
    padding: 0 2rem;
  }
`;

export const AboutContainer = styled.div`
  flex: 1;
  padding: 2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  overflow-y: auto;
  height: auto;

  @media (min-width: 1024px) {
    height: 100vh;
    padding-top: 6rem;
  }
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
`;

export const TextContent = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.primary};

    @media (min-width: 768px) {
      font-size: 3.5rem;
    }
  }

  h2 {
    font-size: 1.8rem;
    color: ${props => props.theme.colors.secondary};
    margin-bottom: 1.5rem;

    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    color: ${props => props.theme.colors.text};

    @media (min-width: 768px) {
      font-size: 1.2rem;
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const SocialIcon = styled(motion.a)`
  color: ${props => props.theme.colors.primary};
  font-size: 1.5rem;
  cursor: pointer;
  text-decoration: none;
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    max-width: 300px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

    @media (min-width: 768px) {
      max-width: 500px;
    }
  }
`;
