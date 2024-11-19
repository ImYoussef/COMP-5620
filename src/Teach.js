import React, { useState } from "react";
import "./Home.css"; // Reuse Home.css for styling
import bjcLogo from './bjcLogo.png';
import pplogo from './pplogo.png';
import heroImage from './hero.png';
import dataStructuresPdf from './Data Structures & Algorithms with Python.pdf';
import pythonPdf from './Python.pdf';
import csPdf from './CS.pdf';

const Teach = () => {
  const [currentPdf, setCurrentPdf] = useState(null);
  const [uploads, setUploads] = useState([]);
  const [courses, setCourses] = useState([
    { name: "Data Structures & Algorithms", url: dataStructuresPdf },
    { name: "Introduction to Python Programming", url: pythonPdf },
    { name: "Introduction to Computer Science with Scratch", url: csPdf },
  ]);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file && (file.type === "application/pdf" || file.type === "application/vnd.ms-powerpoint")) {
      const url = URL.createObjectURL(file);
      const newUpload = {
        name: file.name,
        url: url,
      };
      setUploads((prevUploads) => [...prevUploads, newUpload]);
    } else {
      alert("Only PDF and PPT files are allowed.");
    }
  };

  const handlePublish = () => {
    setCourses((prevCourses) => [...prevCourses, ...uploads]);
    setUploads([]); // Clear the uploads box after moving
  };

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
        {/* My Courses Box */}
        <div className="box-container">
          <h2 className="box-title">My Courses</h2>
          <div className="box large-box left-box">
            <div className="box-content">
              {courses.map((course, index) => (
                <button 
                  key={index} 
                  className="course-button" 
                  onClick={() => setCurrentPdf(course.url)}
                >
                  {course.name}
                  <img src={pplogo} alt="Progress icon" className="icon" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Uploads Box */}
        <div className="box-container">
          <h2 className="box-title">Uploads</h2> 
          <div className="box large-box right-box">
            <div className="box-content">
              {uploads.map((upload, index) => (
                <button 
                  key={index} 
                  className="course-button" 
                  onClick={() => setCurrentPdf(upload.url)}
                >
                  {upload.name}
                  <img src={pplogo} alt="Uploaded file icon" className="icon" />
                </button>
              ))}
              <div className="upload-button-container">
                <input
                  type="file"
                  id="fileUpload"
                  accept=".pdf, .ppt, .pptx"
                  style={{ display: "none" }}
                  onChange={handleUpload}
                />
                <label htmlFor="fileUpload" className="upload-button">
                  Upload
                </label>
                <button className="publish-button" onClick={handlePublish}>
                  Publish
                </button>
              </div>
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

export default Teach;
