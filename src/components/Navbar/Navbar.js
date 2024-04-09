import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import apple from '../../assets/logo.png';
import "./Navbar.css";
import { NavLink } from 'react-router-dom';

function BasicExample() {
  return (
    <Navbar expand="lg" className="Navbar">
      <Container>
            <img src={apple} className='logo' alt="" />
        <Navbar.Toggle  aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  className="homebtn" id="basic-navbar-nav">
          <Nav>
            <NavLink className='Navbarr' to="/">Home</NavLink>
            <NavLink className='Navbarr' to="/About">About</NavLink>
            <NavLink className='Navbarr' to="">Service</NavLink>
            <NavLink className='Navbarr' to="">Blogs</NavLink>
            <NavLink className='Navbarr' to="">Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;