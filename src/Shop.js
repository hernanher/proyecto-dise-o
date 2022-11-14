import {React, useState, useEffect} from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap';
import "./bc.css";




function Shop () {
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
    <div className="row">
    
    {!Producto ? 'Cargando...' :
            Producto.map( (Producto, index)=>{
                return <div className="col-md-4"> 
                <div className="container marketing">
                 

      <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Producto.data.linkImagen}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>{Producto.data.nombre}</h3>
                <p>{Producto.data.descripcion}</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Producto.data.linkImagen2}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>{Producto.data.nombre}</h3>
                <p>{Producto.data.descripcion}</p>
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
            })
        }
    </div>
    </div>
      );
}




export default Shop;