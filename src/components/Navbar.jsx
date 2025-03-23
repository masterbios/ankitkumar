import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Nav = styled.nav`
  padding: 1rem 2rem;
  background-color: ${props => props.theme.colors.background};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
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

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(motion(Link))`
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

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <Logo to="/">Ankit Kumar</Logo>
        <NavLinks>
          <NavLink
            to="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;