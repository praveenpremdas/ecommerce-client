import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home";
import Admin from "./pages/admin";
import AddProduct from "./components/addProduct/addProduct";
import AddAnotherProduct from "./components/addProduct/addAnotherProduct";
import ProductUpdation from "./pages/productUpdation";
import ViewProducts from "./pages/viewProducts";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/admin">
        <Admin />
      </Route>
      <Route path="/addProduct">
        <AddProduct />
      </Route>
      <Route path="/addAnotherProduct">
        <AddAnotherProduct />
      </Route>
      <Route path="/updateProduct">
        <ProductUpdation />
      </Route>
      <Route path="/viewProducts">
        <ViewProducts />
      </Route>
    </Router>
  );
}

export default App;
