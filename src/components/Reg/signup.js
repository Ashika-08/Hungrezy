// import React, { useState } from 'react';
// import Button from '@mui/material/Button';
// import { Link } from 'react-router-dom';
// import './signup.css';

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

//             <button className= 'signupbtn' type="submit" variant="contained" color="primary">
//               Sign Up
//             </button>
//           </form>
//         )}
//         <Button variant="text" style={{ fontSize: '11px' }}>
//           <Link to='/login'>
//             Have an account...? login
//             </Link>
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default SignupPage;



// 
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { validatePassword, validateConfirmPassword } from './vali';
import {Link} from 'react-router-dom' // Import the validation functions

import './signup.css';

const Register = () => {
  const [name, setName] = useState('');
  const [pwd, setPwd] = useState('');
  const [pwdFocus, setPwdFocus] = useState(false);
  const [matchPwd, setMatchPwd] = useState('');
  const [matchFocus, setMatchFocus] = useState(false);
  const [validMatch, setValidMatch] = useState(true);

  const passwordValidationMsg = validatePassword(pwd);
  const confirmPwdValidationMsg = validateConfirmPassword(pwd, matchPwd);

  const validateMatch = () => {
    if (!matchPwd) {
      setValidMatch(true);
    } else if (pwd === matchPwd) {
      setValidMatch(true);
    } else {
      setValidMatch(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Additional logic for form submission if needed
  };

  return (
    <div className="register-container">
      <section className="signup-card">
        <h1 style={{textAlign:'center',color:'#5d2b2d',transform: 'scale(1.5)' }}>Sign Up</h1>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="signup-form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              required
            />
          </div>
          <div className="signup-form-group">
            <label htmlFor='email'>Email</label>
            <input type='email' id='email'/>
          </div>

          <div className="signup-form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
              required
            />
            <p className={pwdFocus && passwordValidationMsg ? 'instructions' : 'offscreen'}>
              <FontAwesomeIcon icon={faInfoCircle} />
              {passwordValidationMsg && passwordValidationMsg}
            </p>
          </div>

          <div className="signup-form-group">
            <label htmlFor="confirm_pwd">Confirm Password</label>
            <input
              type="password"
              id="confirm_pwd"
              onChange={(e) => {
                setMatchPwd(e.target.value);
                validateMatch();
              }}
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
              required
            />
            <p className={matchFocus && !validMatch ? 'instructions' : 'offscreen'}>
              <FontAwesomeIcon icon={faInfoCircle} />
              {!validMatch && confirmPwdValidationMsg}
            </p>
          </div>
          <div className="remem">
            <label htmlFor="remember">
              <input type="checkbox" id="remember" />
              <span>Remember me</span>
            </label>
            <label>
              <a href='#' style={{color:'#552d2f'}}>Forgot Password</a>
            </label>
          </div>
          <button type="submit">Sign Up</button>
          <p style={{display:'flex',justifyContent:'flex-end',fontSize:'1em'}}>
            <Link to="/login" style={{color:'#5d2b2d'}}>Already have an account..?  </Link>
            <a style={{color:'#5d2b2d'}}>Login</a></p>
        <hr></hr>
        <div className='othapp'>
        <button ><img src='https://www.liblogo.com/img-logo/go567g8f1-google-logo-google-pushes-for-pixel-perfect-logo-google-the-guardian.png' 
        style={{width:'15px', paddingRight:'5px'}}></img>
           Login using Google</button>
        </div>
        </form>
      </section>
    </div>
  );
};

export default Register;
