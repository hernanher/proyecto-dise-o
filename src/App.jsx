import "./App.css";
import React from "react";
import Shop from "./components/Shop";
import { CartProvider } from "./context/CartContext";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navi from "./components/Navi";
import About from "./components/About/About";
import BC from "./components/Carousel/BC";
import Footer from "./components/Footer/Footer";
import Carro from "./components/Carro/Carro";
import Tex from "./components/Tex/Tex";
import TB from "./components/TB/TB";
import AC from "./components/AC/AC";



function App() {
  return (
      <Router>
              <div className="App">
                <header >
                <Navi />
                </header>
                < body >
        <Switch>
          <Route exact path="/">
            <BC />
            <TB />
            <Tex />
            <AC />
          </Route>
          < Route exact path="/shop">
          <CartProvider>
            <Shop />
          </CartProvider>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/cart">
          <CartProvider>
            <Carro />
          </CartProvider>
          </Route>
        </Switch>
        </body>
          <Footer />
      </div>

      </Router>


  );
};


export default App;




    /* Basado en codigo de Bootstrap */

