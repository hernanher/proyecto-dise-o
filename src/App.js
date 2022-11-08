import React, { useEffect, useState } from 'react';
import './App.css';
import Products from './Products';
import Cart from './Cart';
import Navi from './Navi';
import Shop from './Shop';
import About from './About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BC from './BC';



function App() {

  return (
      <Router>
      <div className="App">
        <Navi />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/about" component={About} />
          <Route path="/BC" component={BC} />
          <Route path="/products" component={Products} />
          <Route path="/cart" component={Cart} />
        </Switch>
    
    </div>
    </Router>

  );
}


const Home = () => (
  <div>
  <BC/>
  </div>
);

export default App;
