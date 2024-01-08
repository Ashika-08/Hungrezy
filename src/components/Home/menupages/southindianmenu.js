import React, { useState } from 'react';
import './kfcmenu.css';
import axios from "axios";
import {Link} from 'react-router-dom';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';

const SouthIndian = () => {
  const items = [
    {
      name: 'Idly ',
      price: '₹100',
      image: 'https://www.tourmyindia.com/states/tamilnadu/images/idli.jpg',
    },
    {
      name: 'Dosa',
      price: '₹150',
      image: 'https://i0.wp.com/binjalsvegkitchen.com/wp-content/uploads/2015/12/Masala-Dosa-H1.jpg?ssl=1',
    },
    {
      name: 'Pongal',
      price: '₹280',
      image: 'https://static.toiimg.com/thumb/61051454.cms?imgsize=1180189&width=800&height=800',
    },
    {
      name: 'Sambar',
      price: '₹150',
      image: 'https://marudhuskitchen.com/wp-content/uploads/2020/04/sambar-sadam-recipe.jpg',
    },
    {
      name: 'Rice & Chicken curry',
      price: '₹190',
      image: 'https://assets.vogue.in/photos/5efdf623800c753aed1a4acd/16:9/w_5038,h_2834,c_limit/chicken%20curry%20recipe%20homestyle%20chicken%20curry%20recipe%20easy%20recipes%20to%20make%20at%20home%20chicken%20and%20rice.jpg',
    },
    
    {
      name: 'Sea Food Meals',
      price: '₹351',
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/16/8d/f2/72/the-welcome-fish-curry.jpg',
    },
    {
      name: 'Poori',
      price: '₹182',
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/16/8d/f2/72/the-welcome-fish-curry.jpg',
    },
    {
      name: 'Semmiya Payasam',
      price: '₹128',
      image: 'https://thewhiskaddict.com/wp-content/uploads/2021/01/IMG_6503-1-scaled.jpg',
    },
    {
      name: 'Sweet Pongal',
      price: '₹650',
      image: 'https://i.pinimg.com/564x/0a/b5/0a/0ab50a04f86044d52b829b1de3f8782e.jpg',
    },
    {
      name: 'Brinjal Curry',
      price: '₹187',
      image: 'https://i.pinimg.com/564x/64/0b/85/640b850044291215b5465443ba75f55d.jpg',
    },
    {
      name: 'Chettinad Shrimp Fry',
      price: '₹399',
      image: 'https://i.pinimg.com/564x/61/23/21/612321afa95053c5c9f3bfb95f751af5.jpg',
    },
    {
      name: 'Chicken Gravy',
      price: '₹368',
      image: 'https://i.pinimg.com/564x/a8/a6/08/a8a608807fe7191765196fe850c541fa.jpg',
    },
    {
      name: 'Paniyaram',
      price: '₹199',
      image: 'https://i.pinimg.com/564x/fd/c4/f5/fdc4f54c83315313543bab6fc3b5229e.jpg',
    },
    {
      name: 'Vada',
      price: '₹59',
      image: 'https://i.pinimg.com/564x/93/e2/7d/93e27d33644bc6ea36356103654cdf63.jpg',
    }

  ];const addItem = async (a, b) => {
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
    <div className='menu-container'>
      <h1 className='menu-title'>South Indian Menu</h1>
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
  );
};

export default SouthIndian;
