import React from 'react';
import Login from './components/log/login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from './components/Reg/signup';
import HomePage from './components/Home/home';
import KFCMenuPage from './components/Home/menupages/kfcmenu';
import SbwmenuPage from './components/Home/menupages/sbwmenu';
import AdhsMenuPage from './components/Home/menupages/adhsmenu';
import CkrcMenuPage from './components/Home/menupages/ckrcmenu';
import BKMenuPage from './components/Home/menupages/bkmenu';
import About from './components/Home/about';
import Contact from './components/Home/contact';
import FavoritesPage from './FavoritesPage';
import SouthIndian from './components/Home/menupages/southindianmenu';
import AsianMenuPage from './components/Home/menupages/asianmenu';
import BakerMenuPage from './components/Home/menupages/bakereymenu';
import Streetfood from './components/Home/menupages/streetfoodmenu';
import Vegmenu from './components/Home/menupages/vegmenu';
import OrderCart from './components/Home/menupages/OrderCart';
import Launch from './components/log/launch';



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Launch/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignupPage/>} />
          <Route path="/Home" element={<HomePage/>} />
          <Route path='/sbwmenu' element={<SbwmenuPage/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path='/kfcmenu' element={<KFCMenuPage/>}/>
          <Route path='/sbwmenu' element={<SbwmenuPage/>}/>
          <Route path='/adhsmenu' element={<AdhsMenuPage/>}/>
          <Route path='/ckrcmenu' element={<CkrcMenuPage/>}/>
          <Route path='/bkmenu' element={<BKMenuPage/>}/>
          <Route path='/simenu' element={<SouthIndian/>}/>
          <Route path='/asianmenu' element={<AsianMenuPage/>}/>
          <Route path='/Bakermenu' element={<BakerMenuPage/>}/>
          <Route path='/streetfoodmenu' element={<Streetfood/>}/>
          <Route path='/vegmenu' element={<Vegmenu/>}/>
          <Route path="/shop" element={<OrderCart/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// import React, { useState } from 'react';
// import Login from './components/log/login';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import SignupPage from './components/Reg/signup';
// import HomePage from './components/Home/home';
// import Welcome from './components/log/welcome';

// function App() {
//   // Assume you have a state to track user authentication
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   return (
//     <div>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Welcome />} />

//           {/* Public routes */}
//           <Route
//             path="/login"
//             element={<Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />}
//           />
//           <Route path="/signup" element={<SignupPage />} />

//           {/* Private route */}
//           <Route
//             path="/home"
//             element={
//               isAuthenticated ? (
//                 <HomePage />
//               ) : (
//                 // Redirect to login page if not authenticated
//                 <Navigate to="/login" />
//               )
//             }
//           />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;
