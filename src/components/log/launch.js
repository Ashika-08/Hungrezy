// Launch.js

import React from 'react';
import './launch.css';
import {Link} from 'react-router-dom';
import Navbar from './navbar';

function Launch() {
  return (
    <div className='launch-body'>
    <div className='launch-nav'>
      <Navbar/>
      </div>
      <div className='launch-content'>
        <h1>ULTIMATE FOOD HEAVEN</h1>
        <div className='launch-work'>
          <p>HUNGREZY: Where Every Bite Tells a Delicious Story!</p>
          <div className='launch-main'>
          <p>Indulge in a culinary journey like never before.</p>
          <p>Explore a world of flavors, where every bite tells a delicious story.</p>
          <p>At Hungrezy, we bring your favorite cuisines to your doorstep with just a click.</p>
          <p>Get ready for a delightful experience!</p>
          <button className='launch-button'>
          <Link to="/Home" style={{color:'white'}}> Order Now!!</Link></button>
          </div>
        </div>
      </div>
      </div>
    
  );
}

export default Launch;
