
import React, { useState } from 'react';
import './kfcmenu.css';
import axios from "axios";
import {Link} from 'react-router-dom';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';

  const items = [
    {
      name: 'Fried Chicken',
      price: '₹109',
      image: 'https://th-i.thgim.com/public/incoming/q8s9kj/article66626315.ece/alternates/FREE_1200/Image%202.jpg',
    },
    {
      name: 'Chicken Wings',
      price: '₹250',
      image: 'https://images.ctfassets.net/h7j9u4fil4a3/40CfbZuoZkRyr24ly94iEx/37fa42ca232c482e7da822b095f64436/W9_21_WEBSITE_ZP_ALC_1200x800.jpg?w=1200&h=800&fl=progressive&q=50&fm=jpg',
    },
    {
      name: 'Zinger Burger',
      price: '₹280',
      image: 'https://s3.ap-south-1.amazonaws.com/shopnowchat.com/Medium/16111036901b422d759c19c2799c10eeb416c8.png',
    },
    {
      name: 'Smoothie',
      price: '₹150',
      image: 'https://as2.ftcdn.net/v2/jpg/03/10/97/93/1000_F_310979346_kG0dBZSYLA5iX8pDpQcvEH8145dkDwao.jpg',
    },
    {
      name: 'Popcorn Chicken',
      price: '₹150',
      image: 'https://i.pinimg.com/564x/27/0d/6d/270d6d9db5d22295c1eca6e44c572297.jpg',
    },
    
    {
      name: 'Chicken Chizza',
      price: '₹351',
      image: 'https://b.zmtcdn.com/data/dish_photos/210/5108c304c25e2360d28588a461e1f210.jpg',
    },
    {
      name: 'Chicken Chizza & Wings Meal',
      price: '₹482',
      image: 'https://b.zmtcdn.com/data/dish_photos/3a0/57c393364136c53c687a7ff8ebc423a0.jpg',
    },
    {
      name: 'Duo Chicken Chizza',
      price: '₹628',
      image: 'https://lh3.googleusercontent.com/ZvjtPf0A-tHxRw4Uk5T-2GfvRtXXCUP3GfLaz3WKb43V6QaT3zQjz0v5EPWhxwZwb2HwRIR-WK1hZ-A0a7RbVDHaiovyQHxZX5Zhb7hy',
    },
    {
      name: 'Chicken Burger Buddy Meal',
      price: '₹650',
      image: 'https://lh3.googleusercontent.com/OGpThae40aOeP1sFi4CE4aVtV__HFigC9SAlvcFIwibFM4dxuvfivt0GAKHQ7tQpQgFo6vjQvsRWQqEiGa8XArGIVKKXufveYZRYbWo',
    },
    {
      name: 'Chicken Chizza  & Deassert Meal',
      price: '₹487',
      image: 'https://b.zmtcdn.com/data/dish_photos/d99/e4d425ed2f059e4e12c8b905f3bc7d99.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
    },
    {
      name: 'Zinger Pro Burger & Popcorn',
      price: '₹399',
      image: 'https://s3.ap-south-1.amazonaws.com/shopnowchat.com/Medium/1611089b153dffd3829fb695a66e4fd7182b6c.png',
    },
    {
      name: 'Mixed Chicken Zinger Burger',
      price: '₹368',
      image: 'https://lh3.googleusercontent.com/O-Iwa0hbbbKc1c1QhlyEDyef1bS1C9hho5ZCxDgtmYbwuI4LPgeis_gyIB17LApTCs3H1sxk2GncQkT34-L1Bkk4GJaZNs9sBrHif2s',
    },
    {
      name: 'Peri Peri Strips',
      price: '₹499',
      image: 'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-34313-42884.jpg?ver=20.96',
    },
    {
      name: 'Peri Peri Chicken Leg',
      price: '₹519',
      image: 'https://lh3.googleusercontent.com/aths_YZ0-CBsb-Ne8BQUzRCaECgxlt1oTug-upWP-g-l7fVQ-TPJc0K1ohI0fbVq0ss1csWUrVr___wuQLztC7v4L4Ugio7h3xmcydo',
    }

  ];
  const KFCMenuPage = (props) => {
    const addItem = async (a, b) => {
      const result = await axios.get("http://localhost:3001/orderitem");
  
      if (result.data.length === 0) {
        const order = { name: a, price: b, qty: 1 };
        axios.post("http://localhost:3001/orderitem", order);
      } else {
        let existingItem = result.data.find((orderItem) => a === orderItem.name);
  
        if (existingItem) {
          existingItem.qty += 1;
          const order = {
            name: a,
            price: b,
            qty: existingItem.qty,
          };
          axios.put(`http://localhost:3001/orderitem/${existingItem.id}`, order);
        } else {
          const order = { name: a, price: b, qty: 1 };
          axios.post("http://localhost:3001/orderitem", order);
        }
      }
    };
    
    return (
      <>

      <div className='menu-container'>
        <h1 className='menu-title'>KFC Menu</h1>
        <button className='menu-ord-btn'  style={{ display:'flex',justifyContent:'flex-end',  marginLeft: 'auto' }} >
          <Link to='/shop' style={{ color: 'white' }}>
          <ShoppingCartIcon/></Link>
        </button>
        <button className='menu-ord-btn'  style={{ display:'flex',justifyContent:'flex-start',  marginRight: 'auto' }} >
          <Link to='/home' style={{ color: 'white' }}>
          <HomeIcon/></Link>
        </button>
        <div className='menu-card'>
          {items.map((item, index) => (
            <div key={index} className="menu-item">
              <img src={item.image} alt={item.name} className='menu-item-image' />
              <h3 className='menu-item-name'>{item.name}</h3>
              <p className='menu-item-price'>{item.price}</p>
              <button className='menu-ord-btn' onClick={()=> addItem(item.name,item.price )}>
                <AddShoppingCartSharpIcon />
                Add to Cart
              </button>
            </div>
          ))} 
        </div>
        <button className='menu-ord-btn' >
          <Link to='/shop' style={{ color: 'white' }}>
          View Cart</Link>
        </button>
        
      </div>
      </>
    );
  };
  
  export default KFCMenuPage;