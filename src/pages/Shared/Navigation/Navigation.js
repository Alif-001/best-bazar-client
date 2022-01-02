import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './navigation.css'

const Navigation = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Container fluid>
    <NavLink to="/"> <img src="https://i.ibb.co/tDDnGR9/best-bazar.png" alt="" /> </NavLink>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
    {/* <Form className="d-flex ms-auto">
        <FormControl
          type="search"
          placeholder="Search"
          className=""
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form> */}
      <Nav
        className="me-auto my-2 my-lg-0 navLinks"
        style={{}}
        navbarScroll
      >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </Nav>
      <Nav
        className="ms-auto my-2 my-lg-0 navLinks"
        style={{}}
        navbarScroll
      >
        <NavLink to="/cart"><i class="fas fa-shopping-cart"></i><span>0</span></NavLink>
        <NavLink to="/login">Login</NavLink>
      </Nav>

    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Navigation;