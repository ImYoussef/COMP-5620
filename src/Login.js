import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import bjcLogo from './bjcLogo.png';
import heroImage from './hero.png'; 

const Login = () => {
  const [Password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!Password || !username) {
      setError("Please fill in both fields");
    } else {
      setError('');
      navigate('/home');
    }
  };

  const handleTeacherLogin = () => {
    if (!Password || !username) {
      setError("Please fill in both fields");
    } else {
      setError('');
      navigate('/teach');
    }
  };

  const navigateToSignup = () => {
    navigate('/Signup');
  };

  return (
    <div className="login-container">
      <img src={heroImage} alt="Hero" className="hero-image" /> {/* Hero Image */}
      <div className="navbar">
        <div className="logo">
          <img src={bjcLogo} alt="BJC Logo" className="logo-image" />
        </div>
        <div className="nav-buttons">
          <button onClick={() => window.location.href = '/'}>Login</button>
          <button onClick={() => window.location.href = '/signup'}>Sign Up</button>
          <button onClick={() => window.location.href = '/about'}>About Us</button>
        </div>
      </div>

      <div className="login-box">
        <div className="login-header">
          <h2>Login</h2>
          <p className="subtitle">Please log in to continue</p>
        </div>

        {error && <div className="error-message">{error}</div>}

        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <input 
          type="Password" 
          placeholder="Password" 
          value={Password} 
          onChange={(e) => setPassword(e.target.value)} 
        />

        <button className="login-button" onClick={handleLogin}>
          Login
        </button>

        <button 
          className="teacher-login-button" 
          onClick={handleTeacherLogin} 
        >
          Login as Teacher
        </button>
      </div>

      <div className="signup-section">
        <p>New User?</p>
        <button className="signup-button" onClick={navigateToSignup}>Sign Up</button> 
      </div>
    </div>
  );
};

export default Login;
