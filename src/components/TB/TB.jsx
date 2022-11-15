import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import React from 'react';

export default function TB() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="home" title="Acerca de nosotros">
        <div>
        <center>
  <hr className="featurette-divider" />
  <div className="row featurette">
    <div className="col-md-7">
      <h2 className="featurette-heading fw-normal lh-1">Acerca de nosotros</h2>
      <hr className="my-4" />
      <p className="lead">Plus ultra libreria es una tienda que trae los mejores productos por encargo desde Japon. Traemos figuras Originales y alternativas a eleccion de nuestros clientes. </p>
    </div>
    <div className="col-md-5">
      <img src= "https://www.japonalternativo.com/wp-content/uploads/2019/04/donde-comprar-figuras-baratas-en-japon.jpg" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width={500} height={500} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveaspectratio="xMidYMid slice" focusable="false" />
    </div>
    <p><a className="btn btn-primary" href="https://www.instagram.com/plusultralibreria/">Visita La Rifa »</a></p>
  </div>
  <hr className="featurette-divider" />
  </center>
</div>
      </Tab>
      <Tab eventKey="profile" title="Participa en concursos mensuales!">
        <div>
        <center>
  <hr className="featurette-divider" />
  <div className="row featurette">
    <div className="col-md-7">
      <h2 className="featurette-heading fw-normal lh-1">Participa en concursos mensuales!</h2>
      <hr className="my-4" />
      <p className="lead">Cada mes se realizan concursos mensuales en los que podras ganar una figura a eleccion de nuestro amplio catalogo, mas informacion en nuestro Instagram. </p>
    </div>
    <div className="col-md-5">
      <img src= "https://http2.mlstatic.com/D_NQ_NP_706905-MLC44311534448_122020-O.jpg" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width={500} height={500} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveaspectratio="xMidYMid slice" focusable="false" />
    </div>
    <p><a className="btn btn-primary" href="https://www.instagram.com/plusultralibreria/">Visita La Rifa »</a></p>
  </div>
  <hr className="featurette-divider" />
</center>
</div>
      </Tab>
      <Tab eventKey="longer-tab" title="Grandes Marcas">
        <div>
          <center>
  <hr className="featurette-divider" />
  <div className="row featurette">
    <div className="col-md-7">
      <h2 className="featurette-heading fw-normal lh-1">Grandes Marcas</h2>
      <hr className="my-4" />
      <p className="lead">Buscamos importar las mejores marcas y ofrecemos disponibilidad de pago. Ademas que solo necesitas el 50% para las reservas. </p>
    </div>
    <div className="col-md-5">
      <img src= "https://http2.mlstatic.com/D_NQ_NP_2X_840847-MLC28205536802_092018-F.webp" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width={500} height={500} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveaspectratio="xMidYMid slice" focusable="false" />
    </div>
    <p><a className="btn btn-primary" href="https://www.instagram.com/plusultralibreria/">Visita La Rifa »</a></p>
  </div>
  <hr className="featurette-divider" />
</center>
</div>
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        <p>
          Nose
        </p>    
      </Tab>
    </Tabs>
  );
}

