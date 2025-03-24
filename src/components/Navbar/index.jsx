import { Nav, NavContainer, Logo, NavLinks, NavLink } from './styles';

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <Logo to="/">Ankit Kumar</Logo>
        <NavLinks>
          <NavLink to="/" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Home
          </NavLink>
          <NavLink to="/projects" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Projects
          </NavLink>
          <NavLink to="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Contact
          </NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
