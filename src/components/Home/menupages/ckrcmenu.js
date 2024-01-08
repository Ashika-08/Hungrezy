import React, { useState } from 'react';
import './kfcmenu.css';
import axios from "axios";
import {Link} from 'react-router-dom';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';

const CkrcMenuPage = () => {
  const items = [
    {
      name: 'Chicken Briyani',
      price: '₹256',
      image: 'https://i.pinimg.com/564x/9d/9c/15/9d9c15d49cf1a9ee0eaef3beb28133bc.jpg',
    },
    {
      name: 'Grill Chicken',
      price: '₹350',
      image: 'https://i.pinimg.com/564x/c3/82/53/c3825394eb2358a2b708810eb668a0c7.jpg',
    },
    {
      name: 'Honey Prawn',
      price: '₹499',
      image: 'https://i.pinimg.com/564x/78/e4/87/78e4873213176ca66fd2852665a37336.jpg',
    },
    {
        name: 'Shawarma',
        price: '₹72',
        image: 'https://i.pinimg.com/564x/cb/0a/44/cb0a441493d225c16439f2dd8794a0c8.jpg',
      },
      {
        name: 'Fried Rice',
        price: '₹299',
        image: 'https://i.pinimg.com/564x/10/5d/71/105d71ea81e8e015211b34d86047e65f.jpg',
      },
      {
        name: 'Mutton Briyani',
        price: '₹399',
        image: 'https://bfoodale.com/uploads/2021/12/Mutton-Biryani.jpg',
      },
      {
        name: 'AlFaham Chicken',
        price: '₹309',
        image: 'https://img.onmanorama.com/content/dam/mm/en/food/recipe/images/2021/2/14/alfaham.jpg.transform/schema-16x9/image.jpg',
      },
      {
        name: 'Chicken Soup',
        price: '₹109',
        image: 'https://www.yummytummyaarthi.com/wp-content/uploads/2022/07/hot-and-sour-chicken-soup-1.jpg',
      },
      {
        name: 'Schezwan Fried Rice',
        price: '₹259',
        image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2021/02/schezwan-fried-rice-recipe-3.jpg',
      },
      {
        name: 'Schezwan Noodles',
        price: '₹259',
        image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2021/02/schezwan-noodles-recipe-2-1.jpg',
      },
      {
        name: 'Vanila Icecream',
        price: '₹95',
        image: 'https://www.seriouseats.com/thmb/VUOSEdaggiAvPdZY7lK8dPXhvVY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__12__20151202-scotch-vanilla-ice-cream-max-falkowitz-ce3b720c669a415ea9147426d809a5c9.jpg',
      },
      {
        name: 'Chocolate Icecream',
        price: '₹95',
        image: 'https://www.milkmaid.in/sites/default/files/2020-07/Chocolate-Ice-Cream_0.jpg',
      },
      {
        name: 'Oreo MilkShake',
        price: '₹99',
        image: 'https://i.pinimg.com/564x/c2/2d/c2/c22dc22a02ad36b35a070e833bf6e7cc.jpg',
      },
      {
        name: 'Mango MilkShake',
        price: '₹99',
        image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/04/mango-milkshake-recipe.jpg',
      },
      {
        name: 'Lime Juice',
        price: '₹59',
        image: 'https://www.recipevibes.com/wp-content/uploads/2020/08/lime-juice-pic.jpeg',
      },
      {
        name: 'Cool Drinks',
        price: '₹99',
        image: 'https://5.imimg.com/data5/SELLER/Default/2020/10/FP/GL/OA/521830/soft-drinks.jpg',
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
      <h1 className='menu-title'>Cockraco Menu</h1>
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

export default CkrcMenuPage;
