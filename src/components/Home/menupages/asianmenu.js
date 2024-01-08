import React, { useState } from 'react';
import './kfcmenu.css';
import axios from "axios";
import {Link} from 'react-router-dom';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';

const AsianMenuPage = () => {
  const items = [
    {
      name: 'Tteokbokki',
      price: '₹109',
      image: 'https://i.pinimg.com/564x/2d/e6/2a/2de62aab91c71f429b253d8d376ddd4e.jpg',
    },
    {
      name: 'Sushi Tacos',
      price: '₹250',
      image: 'https://i.pinimg.com/564x/2e/a7/d7/2ea7d747b75538dd6df5cca077098162.jpg',
    },
    {
      name: 'Korean Pork Belly Nachos',
      price: '₹280',
      image: 'https://i.pinimg.com/564x/19/51/9f/19519f77bc908513c3b3fa4225d88293.jpg',
    },
    {
      name: 'Jianbing',
      price: '₹150',
      image: 'https://i.pinimg.com/564x/71/4b/17/714b17b467f037fc62a9068d454352e1.jpg',
    },
    {
      name: 'Creamy Masango Udon',
      price: '₹150',
      image: 'https://i.pinimg.com/564x/d9/3a/dd/d93addaf438d3ab00390edda7e65d027.jpg',
    },
    
    {
      name: 'Kimchi Fried Rice',
      price: '₹351',
      image: 'https://i.pinimg.com/564x/c0/20/ec/c020ece54ed401197740ecefa20b9094.jpg',
    },
    {
      name: 'Cheese Dumplings',
      price: '₹482',
      image: 'https://i.pinimg.com/564x/f8/5c/48/f85c486bcdfb3ffb8727917d925130ba.jpg',
    },
    {
      name: 'Quesadillas',
      price: '₹628',
      image: 'https://i.pinimg.com/564x/1e/9e/31/1e9e31dabc1c0a8ce44e958010cc1cd9.jpg',
    },
    {
      name: 'Chicken Bao Buns',
      price: '₹650',
      image: 'https://i.pinimg.com/564x/4b/c4/1e/4bc41ea4f349707ed78b5afff1031cba.jpg',
    },
    {
      name: 'Lemon Pepper Wings',
      price: '₹487',
      image: 'https://i.pinimg.com/564x/b2/bb/c5/b2bbc55680abcb7499f329d2e80519a1.jpg',
    },
    {
      name: 'Corn Cob',
      price: '₹399',
      image: 'https://i.pinimg.com/564x/e5/96/e5/e596e524dcfb4233de7a8707ade3a18f.jpg',
    },
    {
      name: 'Chicken Skewers',
      price: '₹368',
      image: 'https://i.pinimg.com/564x/7f/6e/99/7f6e99c940c8fb4538dc3021e1ef54d8.jpg',
    },
    {
      name: 'Garlic Shrimps',
      price: '₹499',
      image: 'https://i.pinimg.com/564x/b5/95/31/b59531b4a62405289faafd7394252893.jpg',
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
      <h1 className='menu-title'>Asian Menu</h1>
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

export default AsianMenuPage;
