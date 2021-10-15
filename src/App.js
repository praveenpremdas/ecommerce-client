import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home";
import Admin from "./pages/admin";
import AddProduct from "./components/addProduct/addProduct";
import AddAnotherProduct from "./components/addProduct/addAnotherProduct";

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
    </Router>
  );
}

export default App;
