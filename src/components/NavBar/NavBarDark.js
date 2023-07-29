import * as React from "react"
// Import useLocation hook
import { useLocation } from '@reach/router';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';

var base_url = process.env.REACT_APP_ROOT_URL;

const NavBarDark = () =>  {

  const location = useLocation();
  const url = location['pathname'];

  return (
    <Navbar bg="light" expand="lg" className='navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light'>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <li className={"nav-item navbar-item" + (url === base_url ?" active" : "")}><a href={base_url} className="nav-link pl-0">Inicio</a></li>
            <li className={"nav-item navbar-item" + (url === `${base_url}/nosotros` ?" active" : "")}><a href={`${base_url}/nosotros`} className="nav-link">Nosotros</a></li>
            <li className={"nav-item navbar-item" + (url === `${base_url}/cursos` ?" active" : "")}><a href={`${base_url}/cursos`} className="nav-link">Cursos</a></li>
            <li className={"nav-item navbar-item" + (url === `${base_url}/profes` ?" active" : "")}><a href={`${base_url}/profes`} className="nav-link">Profesores</a></li>
            <li className={"nav-item navbar-item" + (url === `${base_url}/blogs` ?" active" : "")}><a href={`${base_url}/blogs`} className="nav-link">Blog</a></li>
            <li className={"nav-item navbar-item" + (url === `${base_url}/contacto` ?" active" : "")}><a href={`${base_url}/contacto`} className="nav-link">Contacto</a></li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
  
export default NavBarDark;