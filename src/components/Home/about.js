import React from 'react'
import './about.css'
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

function About() {
  return (
    <div className='abt-body' >
      <ul className='contact-list'> 
            <li>
              <h1>About us</h1>
            </li>
            <li className='home-icon'><Link to='/Home' style={{color:'black'}}>
              <HomeIcon /></Link>
            </li>
          </ul>
      <div className='abt-card'>
        <h3>Who we are...?</h3>
        <br></br>
        <p>Launched in 2010, Our technology platform connects customers, restaurant partners and delivery partners, serving their multiple needs. 
          Customers use our platform to search and discover restaurants, read and write customer generated reviews and view and upload photos,
           order food delivery, book a table and make payments while dining-out at restaurants. On the other hand, we provide restaurant partners 
           with industry-specific marketing tools which enable them to engage and acquire customers to grow their business while also providing a 
           reliable and efficient last mile delivery service. We also operate a one-stop procurement solution, Hyperpure, which supplies high quality 
           ingredients and kitchen products to restaurant partners. We also provide our delivery partners with transparent and flexible earning opportunities.</p>
           <h3>Mission</h3>
           <p>Our mission is to elevate the quality of life for the urban consumer with unparalleled convenience.
             Convenience is what makes us tick. It's what makes us get out of bed and say, "Let's do this."</p>
            <h3>Our journey</h3>
            <img src='https://coconutfarmers.in/wp-content/uploads/2023/06/MicrosoftTeams-image-4-scaled.webp' style={{width:'700px',height:'500px', padding:'17px'}}></img>
      </div>
    </div>
  )
}

export default About