import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useEffect, useState } from 'react';



const Navi = ({setShow, size }) => {
  const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || []);
  const [cart, setCart] = useState(cartFromLocalStorage);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);


  const getCartTotal = () => {
    return cart.reduce(
      (sum, { quantity }) => sum + quantity,
      0
    );
  };


  return (
<Navbar class="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"> <h3>Plus Ultra Libreria</h3> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link aria-current="page" href="/">Home </Nav.Link>
            <Nav.Link href="/shop">shop</Nav.Link>
            <Nav.Link href="/about">about</Nav.Link>
            <Nav.Link href="/BC">BC</Nav.Link>
            <Nav.Link href="/products">Productos</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Tienda</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Proximamente
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
              Proximamente x2
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
            Proximamente
            </Nav.Link>
          </Nav>

        <Nav.Link href="/products" > Go to Cart ({getCartTotal()})  </Nav.Link>
        <Nav.Link href="/shop" > View Products </Nav.Link>
      
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navi;

