import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
export const Nav = styled.nav`
  padding: 1rem 2rem;
  background-color: ${props => props.theme.colors.background};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

export const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  position: relative;
  cursor: pointer;
  letter-spacing: 0.5px;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -2px;
    left: 0;
    background: ${props => props.theme.colors.secondary};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: ${props => props.theme.colors.secondary};

    &::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

export const NavLink = styled(motion(Link))`
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: ${props => props.theme.colors.secondary};
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }
`;
