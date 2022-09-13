import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import shop from "./Imagenes/Iconos/shop.png";


const Cards = ({ item, handleClick }) => {
  const { title, author, price, img, img2 } = item;
  return (
<CardGroup>
<Card>
<Card.Img />
<Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Ahoharuride</h3>
        <p>Ahoharuride</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img2} 
        alt="Second slide"
      />
      <Carousel.Caption>
        <h3>Ahoharuride</h3>
        <p>Ahoharuride</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
      <Card.Body>
    <Card.Title>Tomo del Manga</Card.Title>
    <Card.Text>
    <p>{title}</p>
        <p>Autor del texto - {author}</p>
        <p>Precio de compra - clp $ {price}</p>
    </Card.Text>
    <Button variant="white" onClick={() => handleClick(item)}>Añadir al carrito
      <img src= {shop} alt="shop" style={{ width: 40, height: 40 }} />
    </Button>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted">Compra antes que se agoten!</small>
  </Card.Footer>
</Card>
</CardGroup>
  );
};

export default Cards;


