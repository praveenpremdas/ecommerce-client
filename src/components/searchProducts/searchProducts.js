import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SearchProducts(props) {
  const [search, setSearch] = useState();
  const [products, setProducts] = useState();
  const [allproducts, setAllProducts] = useState();
  try {
    useEffect(() => {
      axios
        .get("http://localhost:5000/api/home")
        .then((res) => {
          setAllProducts(res.data);
          setProducts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  } catch (error) {
    console.log(error);
  }
  const searchName = {
    search: search,
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:5000/api/admin/search",
      searchName
    );
    if (response.data === "no match found") {
      toast("no product found With this name");
      setProducts(allproducts);
    } else {
      setProducts(response.data);
    }
    console.log(response.data);
  };

  const history = useHistory();
  const purpose = props.purpose;
  const updateProduct = (productId) => {
    history.push({
      pathname: "/updateProduct",
      state: { productId: productId },
    });
  };

  return (
    <section>
      <nav className="navbar navbar-light bg-light justify-content-between">
        <p className="navbar-brand">Navbar</p>
        <form className="form-inline">
          <input
            onChange={handleChange}
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            onClick={handleSubmit}
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>

      <ToastContainer />
      <div className="container-fluid">
        <div className="row p-5">
          {products
            ? products.map((product) => {
                return (
                  <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mt-5 d-inline-flex justify-content-center">
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
                        {purpose ? (
                          <p
                            className="btn btn-primary d-flex pl-5"
                            onClick={() => {
                              updateProduct(product._id);
                            }}
                          >
                            Update
                          </p>
                        ) : (
                          <p className="btn btn-primary d-flex pl-5">Buy Now</p>
                        )}
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
