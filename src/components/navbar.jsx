import React, { useState } from "react";
import "../styles/navbar.css";
import Logo from "../assets/images/logo.png";
import GroupIcon from "../assets/images/group-icon.png";

const NavBar = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <div className="nav-frame">
      <div className="main-frame">
        <img src={Logo} alt="" />
        <img
          src={GroupIcon}
          alt=""
          className="group-icon"
          onClick={toggleNav}
        />
      </div>
      <div className={`nav-option ${isNavOpen ? "" : "hide"}`}>
        <ul>
          <li>
            <a href="#">SERVICES</a>
          </li>
          <li>
            <a href="#">ABOUT US</a>
          </li>
          <li>
            <a href="#">CONTACT US</a>
          </li>
          <li>
            <a href="#">CAREERS</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
