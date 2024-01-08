
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import logofh from './logofh.jpeg'; 
 

import { validatePassword } from './validation';
import HomePage from '../Home/home';

function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // Validate password dynamically
    const passwordError = validatePassword(newPassword);
    setErrMsg(passwordError);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform other form submission logic here
    const isFormValid = !errMsg && name.trim() !== '' && password.trim() !== '';

    if (isFormValid) {
      // Redirect to KFCMenuPage if the form is valid
      navigate('/Home');
    } else {
      setErrMsg('Please fill in all the fields correctly.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 style={{ textAlign: 'center',color:'#5d2b2d' }}>LOGIN</h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={logofh}
            alt="logo"
            className="logo"

          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={handleNameChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
            />
            {errMsg && <p className="error-message">{errMsg}</p>}
          </div>

          <div className="passbtn">
            <label>
              <a href="#" style={{ color: '#552d2f' }}>Forgot Password</a>
            </label>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button className="loginbtn" type="submit">
              Submit
            </button>
          </div>
        </form>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          <button style={{ fontSize: '11px', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', color: '#5d2b2d' }}>
            <Link to="/signup" style={{color:'#5d2b2d'}}>
            Don't have an account ..? Sign in</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
