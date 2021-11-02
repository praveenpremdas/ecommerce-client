import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Products(props) {
  const [products, setProducts] = useState();
  const location = useLocation();
  try {
    useEffect(() => {
      axios
        .get("http://localhost:5000/api/home")
        .then((res) => {
          setProducts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  } catch (error) {
    console.log(error);
  }

  useEffect(() => {
    if (location.hash === "#search") {
      setProducts(location.state.products);
    }
  }, [location]);

  return (
    <section>
      <div className="container-fluid">
        <div className="row p-5">
          {products
            ? products.map((product) => {
                return (
                  <div
                    key={product._id}
                    className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mt-5 d-inline-flex justify-content-center"
                  >
                    <div
                      className="card d-flex justify-content-center"
                      style={{ width: "13rem" }}
                    >
                      <img
                        className="card-img-top w-75"
                        style={{ margin: "auto", height: "150px" }}
                        src={product.image}
                        alt=" product"
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center">
                          {product.productName}
                        </h5>

                        <p className="btn btn-primary d-flex pl-5">Buy Now</p>
                      </div>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </section>
  );
}

export default Products;
