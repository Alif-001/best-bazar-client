import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FiShoppingCart } from "react-icons/fi";
import { MdAccountCircle } from "react-icons/md";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../images/logo.png";
import "./navigation.css";

const Navigation = () => {
  const { user, logOut } = useAuth();
  const { cartItems } = useSelector((state) => state.productCart);
  return (
    <div>
      <Navbar fixed="top" bg="light" expand="lg">
        <Container>
          <NavLink to="/">
            {" "}
            <img src={logo} alt="" />{" "}
          </NavLink>
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
              className="ms-auto my-2 my-lg-0 navLinks d-flex align-items-center"
              style={{}}
              navbarScroll
            >
              {" "}
              {user?.email && (
                <NavLink to="/my-account">
                  <MdAccountCircle className="fs-4" />
                  My Account
                </NavLink>
              )}
              <NavLink className="cart-icon" to="/cart">
                <FiShoppingCart className="fs-4" />
                <span>{cartItems.length}</span>
              </NavLink>
              {user?.email ? (
                <Button onClick={logOut} variant="">
                  Log Out
                </Button>
              ) : (
                <NavLink to="/login">Login</NavLink>
              )}
              {user?.photoURL ? (
                <img
                  style={{ width: 50, height: 50, borderRadius: "50%" }}
                  src={user.photoURL}
                  alt=""
                />
              ) : (
                <span className="mx-2">{user?.displayName}</span>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
