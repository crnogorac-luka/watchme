import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import logo from "@assets/logo.svg";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__top">
          <div className="navbar__left">
            <FontAwesomeIcon icon={faHeart} className="navbar__icon" />
          </div>
          <div className="navbar__center">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="navbar__right">
            <FontAwesomeIcon icon={faInfoCircle} className="navbar__icon" />
          </div>
        </div>
        <div className="navbar__bottom"></div>
      </div>
    </nav>
  );
};

export default Navbar;
