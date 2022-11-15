import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import styles from "./styles.module.scss";
import {  useEffect, useState } from "react";
import { Carousel, CarouselItem, Card, CardGroup} from 'react-bootstrap';
import { helpHttp } from '../Helper/Helper';


const Products = () => {
  const { AddItemToCart } = useContext(CartContext);
  const [Producto, setProducto] =useState()
  
  let api = helpHttp();
  let url = 'http://localhost:5000/Productos';
  
  useEffect(() => {
    api.get(url).then(res=> {
      if(!res.err){
        setProducto(res)
      }else{
        setProducto(null)
      }
    });
  })

  const fetchApi = async () => {
      const response = await fetch(URL)
      const responseJSON = await response.json()
      setProducto(responseJSON) 
  }

  return (
      <div className={styles.productsContainer}>
      {!Producto ? 'Cargando...' :
        Producto.map((product, i) => (
          <div key={i} className={styles.product}>
                <Carousel>
                  <Carousel.Item>
            <img src={product.img1}
                  alt="First slide" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={product.img2}
                      alt="Second slide" />
                  </Carousel.Item>
                  </Carousel>
          <div>
            <p>
              {product.name} - ${product.price}
              <hr className="my-2" />
              <li>PREVENTAS DISPONIBLES!!!</li>
              <li>Marca: {product.editorial}</li>
              <p> </p>
            </p>
          </div>
          <button onClick={() => AddItemToCart(product)}>Add to Cart</button>
          <small className="text-muted">Compra antes que se agoten!</small>
      </div>
    ))}
  </div>
);
};



export default Products;

