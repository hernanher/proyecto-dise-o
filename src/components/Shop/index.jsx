import React from "react";
import Cart from "../Cart";
import Products from "../Products";
import styles from './styles.module.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



const Shop = () => {
  return (
    <div className={styles.shop}>
      <Navbar class="navbar-nav ml-auto" expand="lg"  >
      <Container fluid>
        <Navbar.Brand href="#"> <h3>Mangas</h3> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
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
          </Nav>
          <Cart/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Products />
    </div>
  );
};

export default Shop;
