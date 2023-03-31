import React, { useEffect } from 'react';
import './LandingPage.scss'
import { useNavigate} from 'react-router-dom';
import { isVisited } from '../../services/utils/isVisited';



const LandingPage = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if(isVisited) navigate('/discover');
  })
  
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