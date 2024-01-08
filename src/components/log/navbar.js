import React from 'react';
import './navbar.css'; 
import { Link } from 'react-router-dom';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item" ><Link to='/Home' style={{color:'black'}}>Home</Link></li>
        <li className="nav-item" ><Link to='/about' style={{color:'black'}}>About</Link></li>
        <li className="nav-item" ><Link to='/contact' style={{color:'black'}}>Contact</Link></li>
        <li className="nav-item" ><Link to='/login
        ' style={{color:'black'}}>Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
