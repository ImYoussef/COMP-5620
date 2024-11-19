import React, { useState } from "react";
import "./Home.css";
import bjcLogo from './bjcLogo.png';
import pplogo from './pplogo.png';
import heroImage from './hero.png';
import dataStructuresPdf from './Data Structures & Algorithms with Python.pdf';
import pythonPdf from './Python.pdf';
import csPdf from './CS.pdf';

const Home = () => {
  const [currentPdf, setCurrentPdf] = useState(null);

  return (
    <div className="home-container">
      <img src={heroImage} alt="Hero" className="hero-image" />
      <div className="navbar">
        <div className="logo">
          <img src={bjcLogo} alt="BJC Logo" className="logo-image" />
        </div>
        <div className="nav-buttons">
          <button onClick={() => window.location.href = '/home'}>Courses</button>
          <button onClick={() => window.location.href = '/about'}>About Us</button>
          <button onClick={() => window.location.href = '/'}>Sign Out</button>
        </div>
      </div>

      <div className="content">
        <div className="box-container">
          <h2 className="box-title">My Courses</h2>
          <div className="box large-box left-box">
            <div className="box-content">
              <button 
                className="course-button" 
                onClick={() => setCurrentPdf(dataStructuresPdf)}
              >
                Data Structures & Algorithms
                <img src={pplogo} alt="Progress icon" className="icon" />
              </button>
              <button 
                className="course-button" 
                onClick={() => setCurrentPdf(pythonPdf)}
              >
                Introduction to Python Programming
                <img src={pplogo} alt="Progress icon" className="icon" />
              </button>
              <button 
                className="course-button" 
                onClick={() => setCurrentPdf(csPdf)}
              >
                Introduction to Computer Science with Scratch
                <img src={pplogo} alt="Progress icon" className="icon" />
              </button>
            </div>
          </div>
        </div>
        <div className="box-container">
          <h2 className="box-title">Bookmarks</h2>
          <div className="box large-box right-box">
            <div className="box-content">
              <button className="course-button"
              onClick={() => setCurrentPdf(pythonPdf)}>
                Introduction to Python Programming
                <img src={pplogo} alt="Bookmark icon" className="icon" />
              </button>
             
            </div>
          </div>
        </div>
      </div>

      {currentPdf && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={() => setCurrentPdf(null)}>
              Close
            </button>
            <iframe 
              src={currentPdf} 
              title="Course PDF"
              className="pdf-viewer"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
