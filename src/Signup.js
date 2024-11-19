// src/Signup.js
import React from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate for routing
import "./Signup.css";
import bjcLogo from './bjcLogo.png';

const Signup = () => {
  const navigate = useNavigate(); // For navigation

  return (
    <div className="signup-container">
      <div className="navbar">
        <div className="logo">
          <img src={bjcLogo} alt="BJC Logo" className="logo-image" />
        </div>
        <div className="nav-buttons">
          <button onClick={() => navigate('/')}>Login</button>
          <button onClick={() => navigate('/signup')}>Sign Up</button>
          <button onClick={() => navigate('/about')}>About Us</button>
        </div>
      </div>

      <div className="signup-box">
        <div className="signup-header">
          <h2>Sign Up</h2>
          <p className="subtitle">Create your account to get started</p>
        </div>

        <div className="form-container">
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>

        <button className="signup-button" onClick={() => navigate('/about')}>Sign Up</button>
        
        <div className="signup-section">
          <p>Already have an account?</p>
          <button className="login-button" onClick={() => navigate('/')}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
