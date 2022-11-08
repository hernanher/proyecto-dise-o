import {React, useState, useEffect} from 'react'
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Carousel, CarouselItem } from 'react-bootstrap';


export default function Products({ setCart, cart }) {
    let URL ='https://tjiusnqbldaipvb.form.io/productos/submission'
    const [Producto, setProducto] =useState()
    const fetchApi = async () => {
        const response = await fetch(URL)
        const responseJSON = await response.json()
        setProducto(responseJSON) 
    }
    useEffect(() => {
        fetchApi()
    },[])

  return (
      <div>
        <h1>Products</h1>
        Select a category
        <div className ="App">
          <div className="row">
            
        {!Producto ? 'Cargando...' :
                Producto.map( (Producto, index)=>{
                  
                    return <div className="col-md-4"> 
                    <CardGroup>
                    <Card>
                      <Carousel>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={Producto.data.linkImagen}
                            alt="First slide"
                          />
                          <Carousel.Caption>
                            <h3>{Producto.data.nombre}</h3>
                            <p>{Producto.data.precio}</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item >
                          <img
                            className="d-block w-100"
                            src={Producto.data.linkImagen2}
                            alt="Second slide"
                          />
                          <Carousel.Caption>
                            <h3>{Producto.data.nombre}</h3>
                            <p>{Producto.data.precio}</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                        </Carousel>
                        <Card.Body>
    <Card.Title>Tomo del Manga</Card.Title>
    <Card.Text>
    <p>{Producto.data.nombre}</p>
        <p>Autor del texto - {Producto.data.nombre}</p>
        <p>Precio de compra - clp $ {Producto.data.nombre}</p>
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted">Compra antes que se agoten!</small>
  </Card.Footer>
</Card>

                    </CardGroup>
                    </div>
                })}
      </div>
    </div>
    </div>
  );
}









       




















  





