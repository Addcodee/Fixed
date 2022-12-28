import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Navbar>
        <Container>
          <Link to='/'>
            <Navbar.Brand>Home</Navbar.Brand>
          </Link>

          <Link to='/add'>
            <Navbar.Brand>Add Product</Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
