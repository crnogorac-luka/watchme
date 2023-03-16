import React from 'react';
import './LandingPage.scss'
import { useNavigate} from 'react-router-dom';
//import { getAllGenres, getMovie, getTrending } from '../../services/api/api';


const LandingPage = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/discover');
  };


  return (
    <div className='container'>
      <h1 className='info-title'>Your guide to streaming movies, TV shows, and sports.</h1>
      <button className='btn btn_cta' onClick={handleClick}>Get Started</button>
    </div>
  );
};

export default LandingPage;