import React, { useState } from 'react';
import './kfcmenu.css';
import axios from "axios";
import {Link} from 'react-router-dom';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';

const SbwmenuPage = () => {
  const items = [
    {
      name: 'Sandwich',
      price: '₹199',
      image: 'https://img.etimg.com/thumb/width-1200,height-900,imgsize-40566,resizemode-75,msid-102266491/news/new-updates/subways-unconventional-offer-free-sandwiches-for-a-lifetime-by-changing-your-name.jpg',
    },
    {
      name: 'Berry crunch',
      price: '₹99',
      image: 'https://imagedelivery.net/olI9wp0b6luWFB9nPfnqjQ/res/abillionveg/image/upload/og2mydjmiug4zlvavc6h/1644508839.jpg/w=720',
    },
    {
      name: 'Power cup',
      price: '₹150',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzxA-p-o6BLaovMkvVhRhLh4YsicanIJliDg&usqp=CAU',
    },
    {
        name: 'Wrap',
        price: '₹199',
        image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2018/05/subway-wrap.jpg?quality=82&strip=all',
      },
      {
        name: 'Melon sorbet',
        price: '₹299',
        image: 'data:image/jpeg;base64,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',
      },
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
    <>
    <div className='menu-container'>
      <h1 className='menu-title'>Subway Menu</h1>
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

export default SbwmenuPage;

