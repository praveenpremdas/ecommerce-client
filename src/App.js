import React from "react";
import "./app.css";
import "./components/navbar/navbar";
import Navbar from "./components/navbar/navbar";
import Products from "./components/products/products";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
