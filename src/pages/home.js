import React from "react";
import "../components/navbar/navbar";
import Navbar from "../components/navbar/navbar";
import Products from "../components/products/products";
import Footer from "../components/footer/footer";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Products purpose="home" />
      <Footer />
    </div>
  );
}

export default Home;
