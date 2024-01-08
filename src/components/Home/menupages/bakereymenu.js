import React, { useState } from 'react';
import './kfcmenu.css';
import axios from "axios";
import {Link} from 'react-router-dom';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';

const BakerMenuPage = () => {
  const items = [
    {
      name: 'Mixed Berry Tart',
      price: '₹109',
      image: 'https://i.pinimg.com/564x/6b/71/e7/6b71e767f047396ef90fdbe5bc9f6675.jpg',
    },
    {
      name: 'Raspbery Cheese Mont',
      price: '₹250',
      image: 'https://i.pinimg.com/564x/b6/69/5d/b6695dc6e49aba76d34f26703405b351.jpg',
    },
    {
      name: 'Bounty Cake',
      price: '₹280',
      image: 'https://i.pinimg.com/564x/ed/cb/f6/edcbf6968f931cc414a9cf5069bbae6f.jpg',
    },
    {
      name: 'Cream Cannoncini',
      price: '₹150',
      image: 'https://i.pinimg.com/564x/7e/6a/fd/7e6afd2138ac1cbcfae39073f5d99d1a.jpg',
    },
    {
      name: 'Cannoli',
      price: '₹150',
      image: 'https://i.pinimg.com/564x/7b/fe/fa/7bfefabd15d613e1b3c39242af9d805d.jpg',
    },
    
    {
      name: 'Nutella Crossiants',
      price: '₹351',
      image: 'https://i.pinimg.com/564x/8e/34/d9/8e34d9e139374d543c8488a63d351aae.jpg',
    },
    {
      name: 'Macroons',
      price: '₹482',
      image: 'https://i.pinimg.com/564x/47/cf/00/47cf000eb0b91703cb48d3d085568f2f.jpg',
    },
    {
      name: 'Cinnamon Plamiets',
      price: '₹628',
      image: 'https://i.pinimg.com/564x/a1/3e/ed/a13eede4340da524d4abe8b1f1817526.jpg',
    },
    {
      name: 'Caneles',
      price: '₹650',
      image: 'https://i.pinimg.com/564x/c8/f6/88/c8f688f9b1bcbb55566fee62aaabb2ed.jpg',
    },
    {
      name: 'Latte Donuts',
      price: '₹487',
      image: 'https://i.pinimg.com/564x/13/a4/68/13a468d613fa31ad468f398f871d6ddd.jpg',
    },
    {
      name: 'French Toast',
      price: '₹399',
      image: 'https://i.pinimg.com/564x/c2/34/73/c23473affd4ba88603230a3660435f46.jpg',
    },
    {
      name: 'Tiramisu Charlotte',
      price: '₹368',
      image: 'https://i.pinimg.com/564x/67/d5/a3/67d5a3df9a4ed7a8a7a566c8cdf4106f.jpg',
    },
    {
      name: 'Pistachio & Lemon Mousse',
      price: '₹499',
      image: 'https://i.pinimg.com/564x/3c/22/5d/3c225d43d6fa2937e785d112841c78fe.jpg',
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
    <div className='menu-container'>
      <h1 className='menu-title'>Liholiho Baker Menu</h1>
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

export default BakerMenuPage;
