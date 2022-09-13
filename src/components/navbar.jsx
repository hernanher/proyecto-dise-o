import React from "react";
import "./navbar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NB = ({ setShow, size }) => {
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
            <Nav.Link aria-current="page" href="#Inicio"> Inicio</Nav.Link>
            <Nav.Link href="https://www.instagram.com/plusultralibreria/">Instagram</Nav.Link>
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
            <Nav.Link className="cart" onClick={() => setShow(false)}>Carro ({size})</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NB;

