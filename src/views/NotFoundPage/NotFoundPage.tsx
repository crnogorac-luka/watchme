import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.scss";

const NotFoundPage = () => {
  return (
    <div className="container-page container-page_center">
      <h2 className="not-found-title">Page not found.</h2>
      <p className="not-found-text">
        Oops. Seems like page does not exist.
        <br />
        Go <Link to="/">here</Link> instead.
      </p>
    </div>
  );
};

export default NotFoundPage;
