import { useContext, useEffect, useState } from "react";
import { ItemCart } from "../ItemCart";
import CartContext from "../../context/CartContext";
import styles from "./styles.module.scss";



const Carro = () => {
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
          <div className={styles.cart}>
            <div className={styles.cart__header}>
              <h2 className={styles.cart__title}>Carrito</h2>
              <span className={styles.cart__amount}>{productsLength}</span>
            </div>
            <div className={styles.cart__items}>
              {cartItems.map((item) => (
                <ItemCart key={item.id} item={item} />
              ))}
            </div>
            <div className={styles.cart__footer}>
              <h2 className={styles.cart__total}>Total: ${total}</h2>
            </div>
          </div>
    </div>
  );
};

export default Carro;