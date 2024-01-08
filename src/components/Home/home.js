import React from 'react';
import { Container, Typography, Button, AppBar, Toolbar, containerClasses } from '@mui/material';
import './home.css';
import ImageSlider from './slider';
import Footer from './footer';
import Bar from './bar';
import BrandCard from './brandcard';
import { Link } from 'react-router-dom';


function RestaurantCard({ name, cuisine, image,orderLink  }) {
  return (
      <div className='restaurant-card-container' style={{display: 'flex'}}>

    <div className="restaurant-card"> 
    <h2></h2>
      <img src={image} alt={name} className="restaurant-image" />
      <Typography variant="h4" className="restaurant-name">
        {name}
      </Typography>
      <Typography variant="body1" className="restaurant-cuisine">
        Cuisine: {cuisine}
      </Typography>
      <Link to={orderLink} className="explore-link">
          <button className="orderbtn" variant="contained" color="primary">
            Order Now
          </button>
        </Link>
    </div>
      </div>
  );
}
const brands = [
  {
    name: 'KFC',
    category: 'burger',
    image: 'https://image.similarpng.com/very-thumbnail/2020/06/kfc-logo-free-download-PNG.png',
    exploreLink: '/kfcmenu',
  },
  {
    name: 'Subway',
    category: 'fastfood',
    image: 'https://logowik.com/content/uploads/images/subway4641.logowik.com.webp',
    exploreLink: '/sbwmenu',
  },
  {
    name: 'Anadhaas',
    category: 'meals',
    image: 'https://yt3.googleusercontent.com/5wz0_1dkVF2bBTKPWrxAIMfqgCm8vgTc2r2B916xJbODr783PNdiGp27V9DUmghuqygy586zBQ=s900-c-k-c0x00ffffff-no-rj',
    exploreLink: '/adhsmenu',
  },
  {
    name: 'Cockrako',
    category: 'briyani',
    image: 'https://opaldesignstudio.com/wp-content/uploads/2019/03/062.jpg',
    exploreLink: '/ckrcmenu',
  },
  {
    name: 'Baskin-Robbins',
    category: 'Icecream',
    image: 'https://bcassetcdn.com/public/blog/wp-content/uploads/2021/10/21193849/Baskin-Robbins.png',
    exploreLink: '/bkmenu',
  }
  // Add more brand objects as needed
];

function HomePage() {
  const carouselImages = [
    'https://redcliffelabs.com/myhealth/wp-content/uploads/2022/03/90.jpg',
    'https://i.pinimg.com/564x/cd/69/55/cd6955d6b8a3036d67fca78fea8faeb2.jpg',
    'https://i.pinimg.com/564x/4c/94/64/4c9464de3b3855e2849bd863ceadbc2e.jpg',
    'https://images.alphacoders.com/862/thumb-1920-862639.jpg',
    'https://foodal.com/wp-content/uploads/2023/04/Favorite-Three-Vegetarian-Recipes.jpg',
    'https://www.allrecipes.com/thmb/dSMkfThyQCKHvQ324Zvl5QgVUfM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/231808_GrandmasGroundBeefCasserole_MFS-WD-3x2-1-70dbed45c9de463a85c4b4f3daf15cee.jpg',
    'https://sweetsimplevegan.com/wp-content/uploads/2023/06/easy_homemade_hummus_sweet_simple_vegan_6-1-1200x800.jpg'
    // Add more image URLs as needed
  ];
  const restaurants = [
    {
      name: 'Tamil Nadu Thali',
      cuisine: 'South Indian',
      image: 'https://www.mistay.in/travel-blog/content/images/2020/06/Tamil-cuisine-cover.jpg',
      orderLink: '/simenu',
    },
    {
      name: 'Gua bao',
      cuisine: 'Asian Fusion',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWQAlufaHDpARqeaTQ5GmlVSpzCxA2OfAQs8jwZrRr_569ta7GF76NJrAdhyHF4wrxKRE&usqp=CAU',
      orderLink: '/asianmenu',
    },
    {
      name: 'Liholiho Baked Hawaiian',
      cuisine: 'Hawaiian',
      image: 'https://wallpapercave.com/wp/wp12233317.jpg',
      orderLink: '/bakermenu',
    },
    {
      name: 'Pav Bhaji Junction',
      cuisine: 'Street Food',
      image: 'https://asset20.ckassets.com/blog/wp-content/uploads/sites/5/2019/12/Pav-Bhaji.jpg',
      orderLink: '/streetfoodmenu',
    },
    {
      name: 'food infinity',
      cuisine: 'vegetrainian',
      image: 'https://b.zmtcdn.com/data/pictures/0/19744660/00078c3a5782b1367a6cdfcc03f710a9_o2_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
      orderLink: '/vegmenu',
    },
    
    {
      name: 'Briyani Hub',
      cuisine: 'various',
      image: 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202208/ezgif-sixteen_nine_232.jpg?size=1200:675',
      orderLink: '/ckrcmenu'
    },
    {
      name: 'Grilled Dorade Vernick Fish',
      cuisine: 'Seafood',
      image: 'https://robbreport.com/wp-content/uploads/2020/12/grilled-dorade-vernick-fish.jpg?w=1000',
      orderLink: '/asianmenu',
    },
  ];

  return (
       <div className='home-container-container'>
      <Bar />
      <Container className='image-carousel' style={{width:'300%',marginLeft:'0px',marginRight:'0px' ,padding: '10px 20px', alignContent:'center'}}>
      <ImageSlider slides={carouselImages} /></Container>
      <Container className="top-picks-container" style={{ textAlign: 'center', marginTop: '20px' }}>
        <Typography variant="h4" className="top-picks-title" style={{ marginBottom: '7px' ,color:'#3D1923',fontFamily:'forte'}}>
          Whats on your mind..?
        </Typography></Container>
        
      <Container className="home-container" style={{display: 'flex'}}>
       {brands.map((brand, index) => (
          <BrandCard key={index} {...brand} />
        ))} <br></br><br></br>
        <Container className="top-picks-container" style={{ textAlign: 'center', marginTop: '20px' }}>
        <Typography variant="h4" className="top-picks-title" style={{ marginBottom: '12px' ,color:'#3D1923',fontFamily:'imprint mt shadow'}}>
          Bests of your City....!
        </Typography></Container>
        {restaurants.map((restaurant, index) => (
          <RestaurantCard key={index} {...restaurant} />
        ))}
        </Container>
      
      < Footer/>
      </div>
  );
}

export default HomePage;