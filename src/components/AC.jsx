import Accordion from 'react-bootstrap/Accordion';

export default function AC() {
  return (
    <Accordion>
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
    </Accordion>
  );
}
