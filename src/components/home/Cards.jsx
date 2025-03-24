import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { skillLogos } from '../../data/skillLogos';

export const ExperienceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 0.5rem;
    position: relative;
    flex-wrap: wrap;
    gap: 1rem;

    @media (max-width: 390px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }
  }

  .company {
    background: ${props => props.theme.colors.secondary}08;
    color: ${props => props.theme.colors.secondary};
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 1.1rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    margin-bottom: 0;
    flex-wrap: wrap;

    &::before {
      content: '🏢';
      font-size: 1rem;
    }

    @media (max-width: 390px) {
      font-size: 1rem;
    }
  }

  .duration {
    background: ${props => props.theme.colors.primary}08;
    color: ${props => props.theme.colors.primary};
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.85rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    white-space: nowrap;

    &::before {
      content: '📅';
      font-size: 0.9rem;
    }

    @media (max-width: 390px) {
      font-size: 0.8rem;
      padding: 0.2rem 0.6rem;
    }
  }

  ul {
    list-style-type: none;
    padding-left: 0;
    margin-bottom: 1rem;

    li {
      color: ${props => props.theme.colors.text};
      margin-bottom: 1rem;
      line-height: 1.6;
      position: relative;
      padding-left: 1.5rem;

      &::before {
        content: '→';
        position: absolute;
        left: 0;
        color: ${props => props.theme.colors.primary};
        font-weight: bold;
        opacity: 0.8;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .tech-stack {
    margin-top: 1.5rem;
    padding-top: 1rem;
    border-top: 1px solid ${props => props.theme.colors.background};

    .stack-title {
      background: ${props => props.theme.colors.primary}08;
      color: ${props => props.theme.colors.primary};
      padding: 0.3rem 0.8rem;
      border-radius: 15px;
      font-size: 0.85rem;
      font-weight: 500;
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      margin-bottom: 1rem;

      &::before {
        content: '⚡';
        font-size: 0.9rem;
      }
    }

    .stack-items {
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem;

      span {
        background: rgba(0, 123, 255, 0.1);
        color: ${props => props.theme.colors.primary};
        padding: 0.5rem 1rem;
        border-radius: 25px;
        font-size: 0.9rem;
        font-weight: 500;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        transition: all 0.2s ease;
        border: 1px solid rgba(0, 123, 255, 0.2);

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          background: rgba(0, 123, 255, 0.15);
        }
      }
    }
  }
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

export const SkillCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  h3 {
    background: ${props => props.theme.colors.secondary}08;
    color: ${props => props.theme.colors.secondary};
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 1.1rem;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    margin-bottom: 1.5rem;

    &::before {
      content: attr(data-icon);
      font-size: 1rem;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;

    li {
      background: ${props => props.theme.colors.primary}08;
      color: ${props => props.theme.colors.primary};
      padding: 0.5rem 1rem;
      border-radius: 25px;
      font-size: 0.9rem;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 0.4rem;
      transition: all 0.2s ease;

      img {
        width: 16px;
        height: 16px;
        object-fit: contain;
        opacity: 0.8;
        transition: all 0.2s ease;
      }

      &:hover {
        transform: translateY(-2px);
        background: ${props => props.theme.colors.primary}12;

        img {
          opacity: 1;
          transform: scale(1.1);
        }
      }
    }
  }
`;

export const AchievementCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  display: flex;
  gap: 1rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  .icon {
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.colors.primary}08;
    border-radius: 10px;
    font-size: 1.5rem;
  }

  .content {
    flex: 1;
  }

  h3 {
    background: ${props => props.theme.colors.secondary}08;
    color: ${props => props.theme.colors.secondary};
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 1.1rem;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    margin-bottom: 1.5rem;

    &::before {
      content: attr(data-icon);
      font-size: 1rem;
    }
  }

  ul {
    list-style-type: none;
    padding-left: 0;
    margin-bottom: 1rem;

    li {
      color: ${props => props.theme.colors.text};
      margin-bottom: 1rem;
      line-height: 1.6;
      position: relative;
      padding-left: 1.5rem;

      &::before {
        content: '→';
        position: absolute;
        left: 0;
        color: ${props => props.theme.colors.primary};
        font-weight: bold;
        opacity: 0.8;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .rank {
    color: ${props => props.theme.colors.primary};
    font-weight: bold;
  }
`;

export const ResponsibilityCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  display: flex;
  gap: 1rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  .icon {
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.colors.primary}08;
    border-radius: 10px;
    font-size: 1.5rem;
  }

  .content {
    flex: 1;
  }

  h3 {
    background: ${props => props.theme.colors.secondary}08;
    color: ${props => props.theme.colors.secondary};
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 1.1rem;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    margin-bottom: 1.5rem;

    &::before {
      content: attr(data-icon);
      font-size: 1rem;
    }
  }

  ul {
    list-style-type: none;
    padding-left: 0;
    margin-bottom: 1rem;

    li {
      color: ${props => props.theme.colors.text};
      margin-bottom: 1rem;
      line-height: 1.6;
      position: relative;
      padding-left: 0.6rem;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

export const EducationCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  display: flex;
  gap: 1rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  .icon {
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.colors.primary}08;
    border-radius: 10px;
    font-size: 1.5rem;
  }

  .content {
    flex: 1;
  }

  h3 {
    background: ${props => props.theme.colors.secondary}08;
    color: ${props => props.theme.colors.secondary};
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 1.1rem;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    margin-bottom: 1.5rem;

    &::before {
      content: attr(data-icon);
      font-size: 1rem;
    }
  }

  p {
    color: ${props => props.theme.colors.text};
    font-size: 1rem;
    margin-bottom: 0.5rem;
    padding-left: 0.6rem;
  }

  p:last-child {
    color: ${props => props.theme.colors.primary};
    font-weight: 500;
  }
`;
