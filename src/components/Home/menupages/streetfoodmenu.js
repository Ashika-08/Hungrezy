import React, { useState } from 'react';
import './kfcmenu.css';
import axios from "axios";
import {Link} from 'react-router-dom';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';

const Streetfood= () => {
  const items = [
    {
      name: 'PaniPuri ',
      price: '₹100',
      image: 'https://i.pinimg.com/564x/73/8c/6a/738c6a5732268951acf1193f2dd282db.jpg',
    },
    {
      name: 'Dahi Puri',
      price: '₹150',
      image: 'https://i.pinimg.com/564x/75/83/9a/75839a7479dcbb2c2e49cbe47e8d60c7.jpg',
    },
    {
      name: 'Onion Pakora',
      price: '₹280',
      image: 'https://i.pinimg.com/564x/14/86/43/14864337063f70424d1b8c51ec9389db.jpg',
    },
    {
      name: 'Dhokla',
      price: '₹150',
      image: 'https://i.pinimg.com/564x/4e/65/6e/4e656e368a778f48e3b208ba46e4cb42.jpg',
    },
    
    {
      name: 'Pav Bhaji',
      price: '₹182',
      image: 'https://i.pinimg.com/564x/33/9b/b9/339bb9d3758a6078c7f8a7db996b0854.jpg',
    },
    {
      name: 'Medu vada',
      price: '₹128',
      image: 'https://i.pinimg.com/564x/f4/7f/ec/f47fec964c4b6778507785008ccb0687.jpg',
    },
    {
      name: 'Chai n Rusk',
      price: '₹650',
      image: 'https://i.pinimg.com/564x/9f/36/e2/9f36e26253489d7b8dd2dd7358e244ed.jpg',
    },
    {
      name: 'Momo',
      price: '₹187',
      image: 'https://i.pinimg.com/564x/51/b8/04/51b8041f017d9ebcff875cda40fb2923.jpg',
    },
    {
      name: 'Masala Fries',
      price: '₹399',
      image: 'https://i.pinimg.com/564x/a5/d0/eb/a5d0ebb1bae1d92ec4287c36169afdab.jpg',
    },
    {
      name: 'Sandwich',
      price: '₹368',
      image: 'https://i.pinimg.com/564x/c7/9a/6a/c79a6a877165a9ab2df992dd80dc5ec6.jpg',
    },
    {
      name: 'Cutlet',
      price: '₹199',
      image: 'https://i.pinimg.com/564x/5b/01/eb/5b01ebae7749053b93d28639f78a53c3.jpg',
    },
    {
      name: 'Vada',
      price: '₹59',
      image: 'https://i.pinimg.com/564x/bc/23/f7/bc23f7bd61ab874cce82330e17b36706.jpg',
    }

  ];
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
          <Link to='/shop'style={{ color: 'white' }}>
          View Cart</Link>
        </button>
    </div>
  );
};

export default Streetfood;
