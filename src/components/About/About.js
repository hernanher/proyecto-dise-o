import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

function About () {
  return (
    <><>
      <div class="container" style={{ marginTop: '3%' }}>
        <div class="row">
          <div class="col-md-12 col-lg-10">
            <div class="container">
              <div class="base_header"><span><small class="bor_header_left"></small><h3>Quienes Somos</h3><small class="bor_header_right"></small></span>
              </div>
              <div class="base_footer">
                <p>            Somos una tienda online especializada en la venta de mangas, comics y figuras.
            Llevamos años llevando los mejores mangas a tu hogar mediante MercadoLibre y por Instagram.
            Actualmente trabajamos con la mayoría de las editoriales de habla hispana del mundo,
            por lo que puedes encontrar mangas de las editorial Ivrea Argentina, Ivrea España, Panini Chile,
            Panini Mexico, Panini España, Milky Way (España), Norma Editorial (España), Tomodomo (España) y más.</p>
              </div>

              <br />

              <div class="base_header">
                <h3>Garantías de los pedidos</h3>
              </div>
              <div class="base_footer">
                <p>Una ves entregado el pedido, este tiene una garantía de 5 días en caso de que venga con algún inconveniente.
            Cualquier reclamo, de cualquier índole, será atendido personalmente por WhatsApp, para darle un respuesta
            lo mas pronta posible. Para mas detalles sobre devoluciones y reembolsos, ver el siguiente apartado.</p>
              </div>


            </div>
          </div>
        </div>
      </div>
    </><Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Quienes Somos</Accordion.Header>
          <Accordion.Body>
            Somos una tienda online especializada en la venta de mangas, comics y figuras.
            Llevamos años llevando los mejores mangas a tu hogar mediante MercadoLibre y por Instagram.
            Actualmente trabajamos con la mayoría de las editoriales de habla hispana del mundo,
            por lo que puedes encontrar mangas de las editorial Ivrea Argentina, Ivrea España, Panini Chile,
            Panini Mexico, Panini España, Milky Way (España), Norma Editorial (España), Tomodomo (España) y más.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Garantías de los pedidos</Accordion.Header>
          <Accordion.Body>
            Una ves entregado el pedido, este tiene una garantía de 5 días en caso de que venga con algún inconveniente.
            Cualquier reclamo, de cualquier índole, será atendido personalmente por WhatsApp, para darle un respuesta
            lo mas pronta posible. Para mas detalles sobre devoluciones y reembolsos, ver el siguiente apartado.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion></>
  );
}
export default About;


    /* Basado en codigo de Bootstrap */
