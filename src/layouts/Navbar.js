import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faInfoCircle,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import logo from "@assets/logo.svg";
import "@styles/layout/navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
  <div className="navbar__container">
    <div className="navbar__top">
      <div className="navbar__left">
      <FontAwesomeIcon icon={faHeart} className="navbar__icon icon-small" />
      </div>
      <div className="navbar__center">
        <Link to="/" className="navbar__logo-link">
          <img src={logo} alt="Logo" className="navbar__logo" />
        </Link>
      </div>
      <div className="navbar__right">
        <FontAwesomeIcon icon={faInfoCircle} className="navbar__icon icon-small" />
      </div>
    </div>
    <div className="navbar__bottom">
      <Link to="/movies" className="navbar__link text-link">
        <span className="navbar__link-text">All Movies</span>
      </Link>
      <form className="navbar__search-form ">
        <input className="navbar__search-form-input" type="text" placeholder="Search..." />
        <button className="navbar__search-form-button" type="submit">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="navbar__search-form-icon icon-white icon-tiny" />
        </button>
      </form>
    </div>
  </div>
</nav>
  );
};

export default Navbar;
