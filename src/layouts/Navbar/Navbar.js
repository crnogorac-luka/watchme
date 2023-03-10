import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faInfoCircle,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
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
        <div className="navbar__bottom">
        <Link to="/movies" className="text-link">
          <span>All Movies</span>
          </Link>
          <form class="search-form">
            <input
              class="search-form__input"
              type="text"
              placeholder="Search..."
            />
            <button class="search-form__button" type="submit">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="search-form__button__icon"
              />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
