import React from "react";
import Cart from "./Cart";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <nav className="header-nav">
        <ul className="flex  justify-between ">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              Redux Shopping App
            </h2>
          </li>
          <li className="">
            <Cart />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
