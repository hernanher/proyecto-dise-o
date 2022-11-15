import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import shop from "./Imagenes/Iconos/shop.png";
import Button from "react-bootstrap/Button";



const Navi = () => {
  return ( 
<Navbar class="light" expand="lg" >
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
            <NavDropdown title="Siguenos" id="navbarScrollingDropdown">
              <NavDropdown.Item href="https://www.instagram.com/plusultralibreria/?hl=es-la">Instagram</NavDropdown.Item>
              <NavDropdown.Item href="https://www.instagram.com/brisasdelcentrotalca/?hl=es-la">
                Ubicacion
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://drive.google.com/file/d/1jMyGEHaQmN0lRzH56U8Kr_MeJpK8VYbl/view">
                Catalogo
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
            Proximamente
            </Nav.Link>

          </Nav>
          <Button variant="white" href="/cart" >
      <img src= {shop} alt="shop" style={{ width: 40, height: 40 }} />
    </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};


export default Navi;

