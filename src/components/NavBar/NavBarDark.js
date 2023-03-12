import * as React from "react"

// Import useLocation hook
import { useLocation } from '@reach/router';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';

const NavBarDark = () =>  {

  const location = useLocation();
  const url = location['pathname'];

  return (
    <Navbar bg="light" expand="lg" className='navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light'>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <li className={"nav-item navbar-item" + (url === "/" ?" active" : "")}><a href="/" className="nav-link pl-0">Inicio</a></li>
            <li className={"nav-item navbar-item" + (url === "/nosotros" ?" active" : "")}><a href="/nosotros" className="nav-link">Nosotros</a></li>
            <li className={"nav-item navbar-item" + (url === "/cursos" ?" active" : "")}><a href="/cursos" className="nav-link">Cursos</a></li>
            <li className={"nav-item navbar-item" + (url === "/profes" ?" active" : "")}><a href="/profes" className="nav-link">Profesores</a></li>
            <li className={"nav-item navbar-item" + (url === "/blogs" ?" active" : "")}><a href="/blogs" className="nav-link">Blog</a></li>
            <li className={"nav-item navbar-item" + (url === "/contacto" ?" active" : "")}><a href="/contacto" className="nav-link">Contacto</a></li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
  
export default NavBarDark;