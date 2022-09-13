import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import QuintillizasN10 from './Imagenes/Quintillizas/QuintillizasN10.webp';
import QuintillizasN11 from './Imagenes/Quintillizas/QuintillizasN11.webp';
import QuintillizasN12 from './Imagenes/Quintillizas/QuintillizasN12.webp';
import aoharuride_01 from './Imagenes/AohaRide/aoharuride_01.jpg';
import aoharuride_02 from './Imagenes/AohaRide/aoharuride_02.jpg';
import aoharuride_03 from './Imagenes/AohaRide/aoharuride_03.jpg';


export default function EE() {
  return (
<div className="container marketing">
  <div className="row">
    <div className="col-lg-4">
      <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={aoharuride_01}
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
                src={aoharuride_02}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Ahoharuride</h3>
                <p>Ahoharuride</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={aoharuride_03}
                alt="Third slide"
              />
  
              <Carousel.Caption>
                <h3>Ahoharuride</h3>
                <p>
                  Ahoharuride
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        <hr className="my-2" />
        <li>PREVENTAS DISPONIBLES!!!</li>
        <li>Marca: ---</li>
        <li>Precio: $20000</li>
        <p> </p>
        <p><a className="btn btn-primary" href="https://www.instagram.com/p/CgssiupNyDp/">Mas informacion »</a></p></div>
        <div className="col-lg-4">
      <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={QuintillizasN10}
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
                <p>Las Quintillizas.</p>
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
                Las Quintillizas.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        <hr className="my-2" />
        <li>PREVENTAS DISPONIBLES!!!</li>
        <li>Marca: ---</li>
        <li>Precio: $20000</li>
        <p> </p>
        <p><a className="btn btn-primary" href="https://www.instagram.com/p/CgssiupNyDp/">Mas informacion »</a></p></div>
        <div className="col-lg-4">
      <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={QuintillizasN10}
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
        <hr className="my-2" />
        <li>PREVENTAS DISPONIBLES!!!</li>
        <li>Marca: ---</li>
        <li>Precio: $20000</li>
        <p> </p>
        <p><a className="btn btn-primary" href="https://www.instagram.com/p/CgssiupNyDp/">Mas informacion »</a></p></div>
  </div>
</div>

    );
}