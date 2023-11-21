import React from "react";
import logo from "./Assets/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <img
        src={logo}
        width="90"
        height="60"
        class="d-inline-block align-top img"
      ></img>
      <div class="collapse navbar-collapse lll" id="navbarTogglerDemo01">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="navbar-brand" href="/">
              Login
            </a>
          </li>
          <li class="nav-item">
            <a class="navbar-brand" href="/About">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
