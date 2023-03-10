import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.scss'

const NotFoundPage = () => {
  return (
    <div className='container-page-center'>
      <h1>Page not found.</h1>
      <p>Oops. Seems like page does not exist.<br/>Go <Link to="/">here</Link> instead.</p>
    </div>
  );
};

export default NotFoundPage;