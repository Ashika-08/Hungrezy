// import React, { useState } from 'react';
// import Button from '@mui/material/Button';
// import './App.css';

// function SignupPage() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isSignedUp, setIsSignedUp] = useState(false);

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Email validation
//     if (!email.includes('@')) {
//       alert('Please enter a valid email address.');
//       return;
//     }

//     // Password validation
//     const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;

//     if (password.length >= 8 && passwordRegex.test(password)) {
//       // Simulating a signup process
//       console.log('Signing up...');
//       console.log('Name:', name);
//       console.log('Email:', email);
//       console.log('Password:', password);

//       // Assuming signup is successful (you would perform a server request here)
//       setIsSignedUp(true);
//     } else {
//       alert(
//         'Password must be at least 8 characters long, contain at least one uppercase letter, and at least one special character.'
//       );
//     }
//   };

//   return (
//     <div className="signup-container">
//       <div className="signup-form">
//         <h1>Sign Up</h1>
        
//         {isSignedUp ? (
//           <p>Signup successful! You can now log in.</p>
//         ) : (
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="name">Name:</label>
//               <input
//                 type="text"
//                 id="name"
//                 value={name}
//                 onChange={handleNameChange}
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="email">Email:</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={handleEmailChange}
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="password">Password:</label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={handlePasswordChange}
//                 minLength="8"
//               />
//             </div>

//             <Button type="submit" variant="contained" color="primary">
//               Sign Up
//             </Button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }

// export default SignupPage;

// import styled from "styled-components";
// import Search from "./contents/search";
// import "./App.css";

// const Title = styled.p`
//   font-size: 2rem;
//   color: #eeeeee;
//   letter-spacing: 0.15em;
//   line-height: 2em;
// `;

// export default function App() {
//   return (
//     <div className="App">
//       <Title>Expanding Search Box</Title>
//       <Search />
//     </div>
//   );
// }
//  import React, { useState } from 'react';
// import './App.css'; // Import the external stylesheet

// const StylishSearchBar = ({ onSearch }) => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleSearchSubmit = (event) => {
//     event.preventDefault();
//     // Pass the search query to the parent component or perform the search logic here
//     onSearch(searchQuery);
//   };

//   return (
//     <form className="stylish-search-bar" onSubmit={handleSearchSubmit}>
//       <input
//         type="text"
//         placeholder="Search freelancers..."
//         value={searchQuery}
//         onChange={handleSearchChange}
//         className="search-input"
//       />
//       <button type="submit" className="search-button">
//         Search
//       </button>
//     </form>
//   );
// };

// export default StylishSearchBar;

// Import styles
// import './App.css';

// // Create search container
// const searchContainer = document.createElement('div');
// searchContainer.classList.add('search-container');
// document.body.appendChild(searchContainer);

// // Create search input
// const searchInput = document.createElement('input');
// searchInput.setAttribute('type', 'text');
// searchInput.classList.add('search-input');
// searchInput.setAttribute('placeholder', 'Type to search...');
// searchContainer.appendChild(searchInput);

// // Create search icon
// const searchIcon = document.createElement('div');
// searchIcon.classList.add('search-icon');
// searchIcon.id = 'searchIcon';
// searchIcon.textContent = '🔍';
// searchContainer.appendChild(searchIcon);

// // Add event listener to toggle search input width on icon click
// searchIcon.addEventListener('click', function () {
//   searchContainer.classList.toggle('active');
// });

// import React from 'react'
// import {useState,useRef} from 'react';
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

// function App() {
//   const optarr=[
//     "Ice cream",
//     "juice",
//     'Briyani',
//     'Chaat',
//     'Snacks',
//     'fastFood',
//     'StreetFood',
//     'Veg meals',
//     'Non-Veg meals',
//     'Soup',
//     'Rolls',
//     'Shawarma',
//     'MilkShake',
//     'Burgers',
//     'pizza',
//     'Tacos'
//   ];
//   const [openselect,setOpenSelect]= useState(false);
//   const leagueInput=useRef();
//   function selectvalue(e){
//     leagueInput.current.value=e.target.outerText;
//     setOpenSelect(false);
//   }
//   function openOption(){
//     setOpenSelect(true);
//   }
//   return (
//     <div className='search-body'>
//       <div className='selectOption'>
//         <input className='inputcontent'
//         onClick={openOption}
//         onBlur={()=>{
//           setOpenSelect(false);
//         }}
//         ref={leagueInput}
//         id='league'
//         type='text'
//         placeholder='search...'
//         readOnly/>
//         <span className={openselect ? 'icon active' : 'icon'}>
//         <FontAwesomeIcon icon="angle-down" />
//         </span>
//         <div className={openselect ? "options active ": "options"}>
//           {optarr.map((item, index)=>(
//             <li onClick={selectvalue} key={index}>
//               {item}
//             </li>
//           ))}
//         </div>
//       </div>

//     </div>
//   )
// }

// export default App
// import React, { useState, useRef } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
// import './App.css'; // Import your CSS file

// function App() {
//   const optarr = [
//     'Ice cream',
//     'Juice',
//     'Briyani',
//     'Chaat',
//     'Snacks',
//     'Fast Food',
//     'Street Food',
//     'Veg Meals',
//     'Non-Veg Meals',
//     'Soup',
//     'Rolls',
//     'Shawarma',
//     'Milkshake',
//     'Burgers',
//     'Pizza',
//     'Tacos',
//   ];

//   const [openselect, setOpenSelect] = useState(false);
//   const leagueInput = useRef();

//   function selectvalue(e) {
//     leagueInput.current.value = e.target.innerText;
//     setOpenSelect(false);
//   }

//   function toggleOption() {
//     setOpenSelect(!openselect);
//   }

//   return (
//     <div className="search-body">
//       <div className={`selectOption ${openselect ? 'active' : ''}`}>
//         <input
//           className="inputcontent"
//           onClick={toggleOption}
//           onBlur={() => {
//             setOpenSelect(false);
//           }}
//           ref={leagueInput}
//           id="league"
//           type="text"
//           placeholder="Search..."
//         />
//         <span className={openselect ? 'icon active' : 'icon'}>
//           <FontAwesomeIcon icon={faAngleDown} />
//         </span>
//         <div className={`options ${openselect ? 'active' : ''}`}>
//         {optarr.map((item, index) => (
//   <div onClick={selectvalue} key={index}>
//     {item}
//   </div>
// ))}

          
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faTwitter, faInstagram } from '@fortawesome/free-solid-svg-icons';
import './contact.css';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

function Contact() {
  return (
    <div className='contact-page'>
      
      <div className='contact-body'>
        <div className='contact-card'>
        <ul className='contact-list'> 
            <li>
              <h1>Contact us</h1>
            </li>
            <li className='home-icon'><Link to='/Home' style={{color:'black'}}>
              <HomeIcon /></Link>
            </li>
          </ul>
        
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> foodhub@gmail.com
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} /> +91 9874563210
          </p>
          <p>
            <img src='https://static.vecteezy.com/system/resources/thumbnails/015/311/773/small/red-location-pin-icon-transparent-background-free-vector.jpg'style={{width:'25px'}}></img>
              209, 9th St, Tatabad, Coimbatore, Tamil Nadu 641009
          </p>
          <p>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png' style={{width:'20px'}}>
            </img> food_bub
          </p>
          <p>
            <img src='https://img.freepik.com/free-vector/twitter-new-2023-x-logo-white-background-vector_1017-45422.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1699315200&semt=ais'style={{width:'25px', height:'15px'}}></img>
                 foodhub_
          </p>
          <p>
            <img src='https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png' style={{width:'25px'}}>
            </img>
             foodhub_
          </p>
          <p>
            <img src='https://www.freeiconspng.com/thumbs/youtube-logo-png/hd-youtube-logo-png-transparent-background-20.png'style={{width:'25px'}}></img>
            foodhub_yt
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;

