import React, { useState } from 'react';
import './kfcmenu.css';
import axios from "axios";
import {Link} from 'react-router-dom';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';

const BKMenuPage = () => {
  const items = [
    {
      name: 'Cotton-Candy',
      price: '₹199',
      image: 'https://www.bigbasket.com/media/uploads/p/l/40304135_2-baskin-robbins-ice-cream-rocks-cotton-candy-19-pcs.jpg',
    },
    {
      name: 'Honey Nut Crunch',
      price: '₹179',
      image: 'https://m.media-amazon.com/images/I/51BZodwxFWL.jpg',
    },
    {
      name: 'Dutch chocolate',
      price: '₹139',
      image: 'https://cdn.grofers.com/app/images/products/full_screen/pro_477655.jpg?ts=1685974921',
    },
    {
        name: 'Hazel Rocher',
        price: '₹299',
        image: 'https://cdn.grofers.com/app/images/products/full_screen/pro_495852.jpg?ts=1685975689',
      },
      {
        name: 'Prallies n Creame',
        price: '₹149',
        image: 'https://cdnprod.mafretailproxy.com/sys-master-root/h35/hf4/30318680670238/78228_main.jpg_1700Wx1700H?im=Resize=400',
      },
      {
        name: 'Vanila',
        price: '₹259',
        image: 'https://www.bigbasket.com/media/uploads/p/l/40013031_8-baskin-robbins-ice-cream-vanilla.jpg',
      },
      {
        name: 'Chocolate Tub',
        price: '₹359',
        image: 'https://m.media-amazon.com/images/I/61VH0GGOM0L.jpg',
      },
      {
        name: 'World Class Chocolate ',
        price: '₹319',
        image: 'https://cdnprod.mafretailproxy.com/sys-master-root/h8f/hdc/9177408372766/493842_main.jpg_480Wx480H',
      },
      {
        name: 'Jamoca Almond ',
        price: '₹219',
        image: 'https://cdnprod.mafretailproxy.com/sys-master-root/he2/hd7/13513793994782/59222_main.jpg_1700Wx1700H?im=Resize=400',
      },
      {
        name: 'Caramel',
        price: '₹119',
        image: 'https://cdnprod.mafretailproxy.com/sys-master-root/haf/hcf/9177408700446/493843_main.jpg_480Wx480H',
      },
      {
        name: 'Paramel',
        price: '₹309',
        image: 'https://cdnprod.mafretailproxy.com/sys-master-root/haf/hcf/9177408700446/493843_main.jpg_480Wx480H',
      },
      {
        name: 'Cookies',
        price: '₹314',
        image: 'https://cdn.sharafdg.com/cdn-cgi/image/width=600,height=600,fit=pad/assets/6/d/7/4/6d74c3deef38d61472025fe2536f5016185729f1_000000000001209721.jpg',
      },
      {
        name: 'Mousse Royals',
        price: '₹219',
        image: 'https://waw.sa/sites/default/files/styles/height380/public/2019/02/28/1551383165386412145-036631083464.jpg?itok=WxrTkh9l',
      },
      {
        name: 'Jomaca',
        price: '₹249',
        image: 'https://www.luluhypermarket.com/cdn-cgi/image/f=auto/medias/387312-01.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMzgyNTZ8aW1hZ2UvanBlZ3xhVzFoWjJWekwyZ3pNQzlvTkRJdmFEQXdMemt5TURrME5UQXhNREk0TVRRdWFuQm58NDZiNWFlNGJiOWE4MTQ4NmNhMWUzYjJiMWQ4YWRiMzM2YjU1NmRkNzM0Y2JjMzk2OTg4MWMxYmM2NDRiZjQ1NA',
      },
      {
        name: 'Misissippi Mud',
        price: '₹319',
        image: 'https://www.bigbasket.com/media/uploads/p/l/40126056_3-baskin-robbins-ice-cream-mississippi-mud.jpg',
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
      <h1 className='menu-title'>Baskin Robbins Menu</h1>
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
        <button className='menu-ord-btn' style={{ color: 'white' }}>
          <Link to='/shop'>
          View Cart</Link>
        </button>
    </div>
  );
};

export default BKMenuPage;
