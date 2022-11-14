import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import QuintillizasN10 from './Imagenes/Quintillizas/QuintillizasN10.webp';
import QuintillizasN11 from './Imagenes/Quintillizas/QuintillizasN11.webp';
import QuintillizasN12 from './Imagenes/Quintillizas/QuintillizasN12.webp';
import './bc.css';


function BC() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src = {QuintillizasN10}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Las Quintillizas</h3>
          <p>Las Quintillizas</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={QuintillizasN11}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Las Quintillizas</h3>
          <p>Las Quintillizas</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={QuintillizasN12}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Las Quintillizas</h3>
          <p>
          Las Quintillizas
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default BC;