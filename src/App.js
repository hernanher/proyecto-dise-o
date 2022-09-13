import React, { useState, useEffect } from "react";
import Pinicio from "./components/pinicio";
import Navbar from "./components/navbar";
import TE from "./components/TE";
import AC from "./components/AC";
import EE from "./components/EE";


const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };


  return (
    <React.Fragment>
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <Pinicio handleClick={handleClick} />
      ) : (
        <p />
      )}
      <EE />
      <AC />
      <TE />
    </React.Fragment>
  );
};

export default App;
