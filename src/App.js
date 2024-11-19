// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Login';
import About from './About';
import Home from './Home'; 
import Teach from './Teach'; 
import Signup from './Signup'; 


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/teach" element={<Teach />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/signup" element={<Signup />} />

      </Routes>
    </Router>
  );
};

export default App;
