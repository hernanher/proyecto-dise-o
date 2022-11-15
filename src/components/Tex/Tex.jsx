import {React, useState, useEffect} from 'react'
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Carousel from 'react-bootstrap/Carousel';


function Tex() {
    let URL = 'https://tjiusnqbldaipvb.form.io/principal/submission';
    const [Producto, setProducto] = useState();
    const fetchApi = async () => {
        const response = await fetch(URL);
        const responseJSON = await response.json();
        setProducto(responseJSON);
    };
    useEffect(() => {
        fetchApi();
    }, []);

    return (
        <div>
            {!Producto ? 'Cargando...' :
                Producto.map((Producto) => {
                    return (
                        <Tabs
                            defaultActiveKey=" "
                            className="mb-3"
                        >
                            <Tab eventKey=" " title=" ">
                                <div className="row">
                                    <div className="col-md-12 col-lg-6">
                                        <Carousel>
                                            <Carousel.Item>
                                                <img src={Producto.data.img1} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width={500} height={500} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveaspectratio="xMidYMid slice" focusable="false" />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img src={Producto.data.img2} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width={500} height={500} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveaspectratio="xMidYMid slice" focusable="false" />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img src={Producto.data.img3} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width={500} height={500} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveaspectratio="xMidYMid slice" focusable="false" />
                                            </Carousel.Item>
                                        </Carousel>
                                    </div>
                                    <div className="col-md-12 col-lg-6">

                                        <center>
                                            <hr className="featurette-divider" />
                                            <div className="row featurette">
                                                <div className="col-md-7">
                                                    <h2 className="featurette-heading fw-normal lh-1">{Producto.data.about}</h2>
                                                    <hr className="my-4" />
                                                    <h2 className="featurette-heading">{Producto.data.info}</h2>
                                                    <p className="lead">{Producto.data.name}</p>
                                                </div>
                                            </div>
                                        </center>
                                    </div>
                                </div>
                            </Tab>
                        </Tabs>
                    );
                }
                )}
        </div>
    );
}








export default Tex





      