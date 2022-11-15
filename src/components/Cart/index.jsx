import { useContext, useEffect, useState } from "react";
import { ItemCart } from "../ItemCart";
import CartContext from "../../context/CartContext";
import styles from "./styles.module.scss";
import Button from "react-bootstrap/Button";
import Offcanvas from 'react-bootstrap/Offcanvas';



const Cart = () => {

  const [productsLength, setProductsLength] = useState(0);
  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    setProductsLength(
      cartItems.reduce((previous, current) => previous + current.amount, 0)
    );
  }, [cartItems]);

  const total = cartItems.reduce(
    (previous, current) => previous + current.amount * current.price,
    0
  );
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
<Button variant="white">
<div className={styles.NumR}>{productsLength}</div>
      <img src= "https://us.123rf.com/450wm/yupiramos/yupiramos1608/yupiramos160814293/61338453-canasta-de-compras-vector-de-compra-del-cliente-y-de-la-ilustraci%C3%B3n-aislado-plana.jpg" 
      alt="shop" style={{ width: 40, height: 40 }} 
      onClick={handleShow} />
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carro De compra</Offcanvas.Title>
        </Offcanvas.Header> 
        <Offcanvas.Body>
          <div className={styles.cart}>
            <div className={styles.cart__header}>
              <h2 className={styles.cart__title}>Productos en Carro</h2>
              <hr className="my-1" />

              <span variant="white">
<div className={styles.cart__amount}>{productsLength}</div>
      <img src= "https://us.123rf.com/450wm/yupiramos/yupiramos1608/yupiramos160814293/61338453-canasta-de-compras-vector-de-compra-del-cliente-y-de-la-ilustraci%C3%B3n-aislado-plana.jpg" 
      alt="shop" style={{ width: 40, height: 40 }} />
      </span>
            </div>
            <div className={styles.cart__items}>
              {cartItems.map((item) => (
                <ItemCart key={item.id} item={item} />
              ))}
            </div>
            <div className={styles.cart__footer}>
              <hr className="my-4" />
              <h2 className={styles.cart__total}>Total: ${total}</h2>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Cart;
