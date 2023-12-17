import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Nav, Navbar, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    
    <Navbar expand="lg" className="navbar-dark bg-primary ">
      <Container>
        <Navbar.Brand href="#home">Product Management System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link active" to="/">Home</Link>
            
            <Link to="addProduct" className="nav-link" >Add Product</Link>
            
           </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    
  )
}

export default NavBar