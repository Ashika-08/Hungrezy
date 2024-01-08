import React, { useState } from 'react';
import './kfcmenu.css';
import axios from "axios";
import {Link} from 'react-router-dom';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';

const AdhsMenuPage = () => {
  const items = [
    {
      name: 'Badam Rose Laddu',
      price: '₹314',
      image: 'https://b.zmtcdn.com/data/pictures/9/18987289/526b281f6da6f22e2aec35c0d2b50f8a.jpg',
    },
    {
      name: 'Ghee Mysore Pak',
      price: '₹172',
      image: 'https://images.herzindagi.info/image/2023/Oct/famous-karnataka-sweets.jpg',
    },
    {
      name: 'Rasamalai',
      price: '₹99',
      image: 'https://sreeguptabhavan.com/wp-content/uploads/2023/08/Sweets.webp',
    },
    {
        name: 'Jalebi',
        price: '₹199',
        image: 'https://i.pinimg.com/564x/de/9a/44/de9a444eaa7ab370cc06229c0906e26f.jpg',
      },
      {
        name: 'Gulab Jamun',
        price: '₹299',
        image: 'https://i.pinimg.com/736x/5b/b6/16/5bb6162ba06215de18b7b970d2a5d043.jpg',
      },
      {
        name: 'Ghee Laddu',
        price: '₹159',
        image: 'https://i0.wp.com/srivenkateshwarasweets.in/wp-content/uploads/2020/03/14.jpg?fit=1150%2C1350&ssl=1',
      },
      {
        name: 'Kaju Katli',
        price: '₹347',
        image: 'https://static.toiimg.com/thumb/55048826.cms?imgsize=392932&width=800&height=800',
      },
      {
        name: 'Badam Mysore Pak',
        price: '₹220',
        image: 'data:image/jpeg;base64,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',
      },
      {
        name: 'Gulkand Bisciut',
        price: '₹385',
        image: 'https://m.media-amazon.com/images/I/51LVyRNfBrL._AC_UF1000,1000_QL80_.jpg',
      },
      {
        name: 'Banaras Soan Papdi',
        price: '₹172',
        image: 'data:image/jpeg;base64,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',
      },
      {
        name: 'Karupatti Mysore Pak',
        price: '₹223',
        image: 'https://snackative.com/cdn/shop/products/Nellai_Karupatti_Ghee_Mysore_Pak_1_1200x1200.jpg?v=1629801438',
      },
      {
        name: 'Kesar Peda',
        price: '₹219',
        image: 'https://5.imimg.com/data5/SELLER/Default/2021/1/EW/IW/GA/36473839/kesar-peda.jpeg',
      },
      {
        name: 'Mundhiri Cake',
        price: '₹251',
        image: 'https://cdn.shopify.com/s/files/1/0645/5951/3823/files/MundhiriCake_a5e637d7-ccf8-4d7b-8d4a-a263f64337de_400x.jpg?v=1694177488',
      },
      {
        name: 'Baby Milk Cake',
        price: '₹230',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShjr8lSHN73OnLwjWUmL_kQvc4L8P0phvUUSEAFPIqqCKOD_D-e_txtQyqMjHT3-fH8Ms&usqp=CAU',
      },
      {
        name: 'Kaju Pista Roll',
        price: '₹347',
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
      <h1 className='menu-title'>Anandhaas Menu</h1>
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

export default AdhsMenuPage;
