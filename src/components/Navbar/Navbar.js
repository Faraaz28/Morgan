import "./Navbar.css";
import Nav from 'react-bootstrap/Nav';
import apple from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function BasicExample() {
  return (
    <Navbar expand="lg" className="Navbar">
      <Container>
            <img src={apple} className='logo' alt="" />
        <Navbar.Toggle className="nvbtn" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  className="homebtn" id="basic-navbar-nav">
          <Nav>
            <NavLink className='Navbarr' to="/">Home</NavLink>
            <NavLink className='Navbarr' to="/About">About</NavLink>
            <NavLink className='Navbarr' to="/Service">Service</NavLink>
            <NavLink className='Navbarr' to="/blogs">Blogs</NavLink>
            <NavLink className='Navbarr' to="/Contact">Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;