import React from "react";
import "./admin.css";
import { useHistory } from "react-router-dom";

export default function Sidebar() {
  const history = useHistory();

  const goToAddProduct = () => {
    history.push("/addProduct");
  };

  const goToViewProducts = () => {
    history.push("/viewProducts");
  };
  return (
    <div>
      <nav className="menu bg-primary" tabIndex={0}>
        <div className="smartphone-menu-trigger" />
        <header className="avatar">
          <img
            alt="admin"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRjU54dwmpxNfYWuIjlxFZn_V7RY88PcmJpA&usqp=CAU"
          />
          <h2>Admin</h2>
        </header>
        <ul>
          <li tabIndex={0} className="icon-dashboard" onClick={goToAddProduct}>
            <span>Add Product</span>
          </li>
          <li
            tabIndex={0}
            className="icon-customers"
            onClick={goToViewProducts}
          >
            <span>Product Updation</span>
          </li>
          <li tabIndex={0} className="icon-users">
            <span>Users</span>
          </li>
          <li tabIndex={0} className="icon-settings">
            <span>Settings</span>
          </li>
        </ul>
      </nav>
      <main className="bg-light">
        <div className="helper bg-info text-white">Admin Panel</div>
      </main>
    </div>
  );
}
