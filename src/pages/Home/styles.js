import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const HomeContainer = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`;

export const Content = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem 2rem;
  position: relative;
`;

export const Title = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.text};
  margin-bottom: 1rem;
  text-align: center;
`;

export const Subtitle = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 2rem;
  text-align: center;
`;
