import React from 'react';
import { Typography, Button } from '@mui/material';
import './brandcard.css'; // Import the external CSS file
import {Link} from 'react-router-dom'


function BrandCard({ name, category, image, exploreLink }) {
  return (
    <div className='brand-card-container'>
      <div className="brand-card">
        <img src={image} alt={name} />
      </div>
      <Typography variant="h5" className="brand-name">
        {name}
      </Typography>
      <Typography variant="body1" className="brand-category" style={{fontWeight:"bold"}}>
        Category: {category}
      </Typography>
      {/* Use Link from React Router for navigation */}
      <Link to={exploreLink} className="explore-link">
        <button className="orderbtnbc" variant="contained" color="primary">
          Explore
        </button>
      </Link>
    </div>
  );
}


export default BrandCard;
