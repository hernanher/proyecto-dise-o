import {React, useState, useEffect} from 'react'
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Carousel, CarouselItem } from 'react-bootstrap';
import { helpHttp } from './Helpers/helpHttp';


export default function Products({ setCart, cart }) {
  const[db, setDB] = useState([]);
  const [dataToEdit, setDataToEdit]  = useState(null);
  
  let api = helpHttp();
  let url = 'http://localhost:5000/Productos';
  
  useEffect(() => {
    api.get(url).then(res=> {
      if(!res.err){
        setDB(res)
      }else{
        setDB(null)
      }
    });
  })

  return (
      <div>
        <h1>Products</h1>
        Select a category
        <div className ="App">
          <div className="row">
            
        {!db ? 'Cargando...' :
                db.map( (db, index)=>{
                  
                    return <div className="col-md-4"> 
                    <CardGroup>
                    <Card>
                      <Carousel>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={db.img1}
                            alt="First slide"
                          />
                          <Carousel.Caption>db
                            <h3>{db.name}</h3>
                            <p>{db.price}</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item >
                          <img
                            className="d-block w-100"
                            src={db.img2}
                            alt="Second slide"
                          />
                          <Carousel.Caption>
                            <h3>{db.name}</h3>
                            <p>{db.price}</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                        </Carousel>
                        <Card.Body>
    <Card.Title>Tomo del Manga</Card.Title>
    <Card.Text>
    <p>{db.name}</p>
        <p>Autor del texto - {db.name}</p>
        <p>Precio de compra - clp $ {db.name}</p>
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









       




















  





