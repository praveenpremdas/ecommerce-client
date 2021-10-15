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
              <a className="nav-link text-white" href="#">
                Login <span className="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle text-white"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                More
              </a>

              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Cart
                </a>
                <a class="dropdown-item" href="#">
                  Wishlist
                </a>
                <a class="dropdown-item" href="#">
                  Categories
                </a>
                <a class="dropdown-item" href="#">
                  Order history
                </a>
                <a class="dropdown-item" href="#">
                  Customer support
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  My Profile
                </a>
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
