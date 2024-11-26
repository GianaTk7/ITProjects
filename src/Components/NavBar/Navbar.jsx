import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShopCategoryContext } from "../contexthook/ShopCategoryContext";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  const [userName, setUserName] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { cartItems } = ShopCategoryContext();

  const getInitials = (name) => {
    if (!name) return "";
    const nameParts = name.split(" ");
    return nameParts.map((part) => part[0].toUpperCase()).join("");
  };

  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
    }

    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark-mode");
    }
  }, []);

  const userInitials = getInitials(userName);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    if (isDarkMode) {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <div className={`main-container ${isDarkMode ? "dark-navbar" : ""}`}>
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
            <li
              id={menu === "Men" ? "highlight" : ""}
              onClick={() => setMenu("Men")}
            >
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
          <button onClick={toggleTheme} className="theme-toggle-btn">
            {isDarkMode ? (
              <img
                src="R (2).png"
                alt="Light Mode"
                style={{ width: "30px", height: "30px" }}
              />
            ) : (
              <img
                src="R (2).png"
                alt="Dark Mode"
                style={{ width: "30px", height: "30px" }}
              />
            )}
          </button>
          <Link to="/Locations">
            <img className="icon" src="locationperson.svg" alt="loc" />
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
          {userName ? (
            <div className="user-initials">{userInitials}</div>
          ) : (
            <Link to="/Signup">
              <button id="login-box">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
