// import React from 'react'
// import './bar.css';
// import {Nav } from 'react-bootstrap';
// import { Typography } from '@mui/material';
// function Bar() {
//   return (
//     <div className='bar-container' >
//        <Nav>
//          <div >
//            <ul className='bar-content'>
//              <li>
//                <a className='active' href='index.html'>Menu</a>
//              </li>
//              <li>
//                <a href='index.html'>Login</a>
//              </li>
//              <li>
//                <a href='index.html'>Signup</a>
//              </li>
//              <li>
//                <a href='index.html'>Contact</a>
//              </li>
//            </ul>
//          </div>
//        </Nav>

//              </div>
//   )
// }

// export default Bar


import React from 'react';
import './bar.css';
import { Nav } from 'react-bootstrap';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Findbar from './findbar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import namyy from './namyy.png'

function Bar() {
  return (
    <div className='bar-container'>
      <Nav>
        <div>
          {/* Typography for the 'foodhub' text */}
          <div className='bar-place'>
          <Typography variant="h6" component="div" className="brand-title">
            HUNGREZY
            
            <div style={{display:'flex', justifyContent:'flex-end'}}><Findbar/></div>
          </Typography></div>

          <ul className='bar-content'>
            <li>
              <a className='active' href='index.html'>
                <Link to='/about'>About us</Link></a>
            </li>
            <li>
              <a href='index.html'>
                <Link to='/contact'>Contact</Link></a>
            </li>
            <li>
              <a href='index.html'>
               <Link to='/login'> Logout</Link>
                </a>
            </li>
            <li>
              <a href='index.html'>
              <Link to='/shop'>  <ShoppingCartIcon/> </Link> 
                </a>
            </li>
            
          </ul>
        </div>
      </Nav>
    </div>
  );
}

export default Bar;
