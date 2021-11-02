import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function Navbar() {
  const history = useHistory();
  const [searchItem, setSearchItem] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (localStorage.getItem("_id")) {
          const response = await axios.post(
            "http://localhost:5000/api/home/userdetials",
            { id: localStorage.getItem("_id") }
          );
          if (response.status === 201) {
            setData(response.data);
            console.log(response.data);
          } else {
            console.log(response);
          }
        }
      } catch (error) {
        console.log(error.response);
      }
    };

    fetchData();
  }, []);

  const goToLogin = () => {
    if (data) {
      setTimeout(() => {
        localStorage.removeItem("_id");
        setData("");
        history.push("/");
      }, 3000);
      toast("Logot Sucessfull");
    } else {
      history.push("/login");
    }
  };

  const search = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      "http://localhost:5000/api/admin/search",
      { search: searchItem }
    );
    console.log(searchItem);
    if (response.data === "no match found") {
      toast("no product found With this name");
    } else {
      history.push({
        hash: "#search",
        pathname: "/",
        state: { products: response.data },
      });
    }
  };

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-info">
      <ToastContainer />
      <p className="navbar-brand text-white">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwkroIamyKqxq7QMUSW1QXyPL3cmaIrV_oPA&usqp=CAU"
          width={30}
          height={30}
          className="d-inline-block align-top"
          alt=""
        />
        HT Cart
      </p>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <p className="nav-link text-white" onClick={goToLogin}>
              {data ? "Logout" : "Login"}
            </p>
          </li>
          <li className="nav-item dropdown">
            <p
              className="nav-link dropdown-toggle text-white"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              More
            </p>

            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <p className="dropdown-item">Cart</p>
              <p className="dropdown-item">Wishlist</p>
              <p className="dropdown-item">Categories</p>
              <p className="dropdown-item">Order history</p>
              <p className="dropdown-item">Customer support</p>
              <div className="dropdown-divider"></div>
              <p className="dropdown-item">My Profile</p>
            </div>
          </li>
        </ul>
        <p className="text-white pr-5">
          {data ? <h5>Welcome {data.name}</h5> : ""}
        </p>
        <form className="form-inline my-2 my-lg-0">
          <input
            onChange={(e) => setSearchItem(e.target.value)}
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-light my-2 my-sm-0 "
            onClick={search}
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
