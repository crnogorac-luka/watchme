import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faInfoCircle
} from "@fortawesome/free-solid-svg-icons";
import logo from "@assets/logo.svg";
import "@styles/layout/navbar.scss";
import SearchBar from "../components/SearchBar";

const Navbar = () => {

  const navigate = useNavigate();

  const openFavorites = () => {
    navigate('/favorites');
  };

  return (
    <nav className="navbar">
  <div className="navbar__container">
    <div className="navbar__top">
      <div className="navbar__left">
      <FontAwesomeIcon icon={faHeart} className="navbar__icon icon-small" onClick={openFavorites} />
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
      <SearchBar />
    </div>
  </div>
</nav>
  );
};

export default Navbar;
