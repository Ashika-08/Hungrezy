// import React, { useState, useRef } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
// import './findbar.css';

// function Findbar() {
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

// export default Findbar;
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './findbar.css'

const SearchBar = () => {
 const [input, setInput] = useState('');
 const [hovered, setHovered] = useState(false);

 const handleChange = (e) => {
    setInput(e.target.value);
 };

 const handleMouseEnter = () => {
    setHovered(true);
 };

 const handleMouseLeave = () => {
    setHovered(false);
 };

 return (
    <div
      className="search-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <FontAwesomeIcon icon={faSearch} />
      <input
        type="text"
        placeholder="Search..."
        value={input}
        onChange={handleChange}
        className={hovered ? 'search-expanded' : 'search-collapsed'}
      />
    </div>
 );
};

export default SearchBar;
