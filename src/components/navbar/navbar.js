import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function navbar() {
  return (
    <Router>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-info">
        <Link className="navbar-brand text-white" href="#">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwkroIamyKqxq7QMUSW1QXyPL3cmaIrV_oPA&usqp=CAU"
            width={30}
            height={30}
            className="d-inline-block align-top"
            alt=""
          />
          HT Cart
        </Link>
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
              <p className="nav-link text-white">
                Login <span className="sr-only">(current)</span>
              </p>
            </li>
            <li class="nav-item dropdown">
              <p
                class="nav-link dropdown-toggle text-white"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                More
              </p>

              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <p class="dropdown-item">Cart</p>
                <p class="dropdown-item">Wishlist</p>
                <p class="dropdown-item">Categories</p>
                <p class="dropdown-item">Order history</p>
                <p class="dropdown-item">Customer support</p>
                <div class="dropdown-divider"></div>
                <p class="dropdown-item">My Profile</p>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-light my-2 my-sm-0 "
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </Router>
  );
}

export default navbar;
