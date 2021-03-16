import React from 'react'
import logo from './logo.svg';
import './App.css'
import Header from './Component/Header/Header';
import Shop from './Component/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './Component/Review/Review';
import Inventory from './Component/Inventory/Inventory';
import Error from './Component/Error/Error';
import ProductDetail from './Component/ProductDetail/ProductDetail';

function App() {
  return (
    <div>
      <Header></Header>
      <div className="Container">
        <Router>
          <Switch>

            <Route path = "/shop">
              <Shop></Shop>
            </Route>

            <Route path = "/order">
              <Review></Review>
            </Route>

            <Route path = "/manage">
              <Inventory></Inventory>
            </Route>

            <Route exact path = "/:">
              <Shop></Shop>
            </Route>

            <Route path = "/product/:productKey">
              <ProductDetail></ProductDetail>
            </Route>

            <Route path = "*">
              <Error></Error>
            </Route>

          </Switch>
        </Router>
        {/* <Shop></Shop> */}
      </div>
    </div>
  );
}

export default App;
