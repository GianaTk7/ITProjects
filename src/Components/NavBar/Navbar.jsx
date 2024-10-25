import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShopCategoryContext } from "../contexthook/ShopCategoryContext";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  const { cartItems } = ShopCategoryContext(); // Use the correct context hook

  return (
    <div className="main-container">
      <div className="navbar-div">
        <div className="logo-div">
          <img src="logo_big.png" id="bag" alt="Logo" />
          <h1 id="header">JM Store</h1>
        </div>
        <div className="nav-menu-div">
          <ul className="nav-menu">
            <li onClick={() => setMenu("Home")}>
              <Link style={{ textDecoration: "none" }} to="/">
                Home
              </Link>
              {menu === "Home" ? <hr /> : null}
            </li>
            <li onClick={() => setMenu("Men")}>
              <Link style={{ textDecoration: "none" }} to="/Men">
                Men
              </Link>
              {menu === "Men" ? <hr /> : null}
            </li>
            <li onClick={() => setMenu("Women")}>
              <Link style={{ textDecoration: "none" }} to="/Women">
                Women
              </Link>
              {menu === "Women" ? <hr /> : null}
            </li>
            <li onClick={() => setMenu("Kids")}>
              <Link style={{ textDecoration: "none" }} to="/Kids">
                Kids
              </Link>
              {menu === "Kids" ? <hr /> : null}
            </li>
          </ul>
        </div>
        <div className="icons-login-div">
          <Link to="/Signup">
            <button id="login-box">Login</button>
          </Link>
          <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
            <img
              className="notifi"
              src="notification.svg"
              alt="Notification Bell"
            />
          </a>
          <Link to="/cart">
            <img className="icon" src="shopping.svg" alt="Shopping Cart" />
          </Link>
          <div className="nav-shopping-count">{cartItems.length}</div>
          <Link to="/Locations">
            <img className="icon" src="locationperson.svg" alt="loc" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
