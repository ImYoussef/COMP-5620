import React from "react";
import "./About.css";
import bjcLogo from './bjcLogo.png';
import big1Image from './big1.png';
import big2Image from './big2.jpg';
import big3Image from './big3.jpg';
import big4Image from './big4.jpg';
import big5Image from './big5.jpg';
import big6Image from './big6.jpg';
import big7Image from './big7.jpg';

const About = () => {
  return (
    <div className="home-container">
      <div className="navbar">
        <div className="logo">
          <img src={bjcLogo} alt="BJC Logo" className="logo-image" />
        </div>
        <div className="nav-buttons">
          <button onClick={() => window.location.href = '/home'}>Courses</button>
          <button>About Us</button>
          <button onClick={() => window.location.href = '/'}>Sign Out</button>
        </div>
      </div>

      <div className="about-content">
        {/* Big Idea 1 */}
        <div className="about-section">
          <h3 className="about-box-title">Big Idea 1</h3>
          <div className="about-box">
            <h4>Creativity</h4>
            <img src={big1Image} alt="Creativity" className="about-image" />
            <p>
              Creativity in computing is about using technology to create new and innovative solutions.
              It involves thinking outside the box and using computational tools to bring ideas to life.
            </p>
          </div>
        </div>

        {/* Big Idea 2 */}
        <div className="about-section">
          <h3 className="about-box-title">Big Idea 2</h3>
          <div className="about-box">
            <h4>Abstraction</h4>
            <img src={big2Image} alt="Abstraction" className="about-image" />
            <p>
              Abstraction in computing is the process of reducing complexity by focusing on the main idea and hiding the details.
              It helps in managing large systems and making them easier to understand and work with.
            </p>
          </div>
        </div>

        {/* Big Idea 3 */}
        <div className="about-section">
          <h3 className="about-box-title">Big Idea 3</h3>
          <div className="about-box">
            <h4>Data and Information</h4>
            <img src={big3Image} alt="Data and Information" className="about-image" />
            <p>
              Data and information are at the core of computing. This big idea focuses on how data is collected, analyzed, and used to make decisions.
              It also covers the importance of data privacy and security.
            </p>
          </div>
        </div>

        {/* Big Idea 4 */}
        <div className="about-section">
          <h3 className="about-box-title">Big Idea 4</h3>
          <div className="about-box">
            <h4>Algorithms</h4>
            <img src={big4Image} alt="Algorithms" className="about-image" />
            <p>
              Algorithms are step-by-step procedures or formulas for solving problems. This big idea covers how algorithms are designed, analyzed, and implemented to perform tasks efficiently.
            </p>
          </div>
        </div>

        {/* Big Idea 5 */}
        <div className="about-section">
          <h3 className="about-box-title">Big Idea 5</h3>
          <div className="about-box">
            <h4>Programming</h4>
            <img src={big5Image} alt="Programming" className="about-image" />
            <p>
              Programming is the process of writing instructions for a computer to execute. This big idea focuses on the principles of programming, including syntax, logic, and debugging.
            </p>
          </div>
        </div>

        {/* Big Idea 6 */}
        <div className="about-section">
          <h3 className="about-box-title">Big Idea 6</h3>
          <div className="about-box">
            <h4>The Internet</h4>
            <img src={big6Image} alt="The Internet" className="about-image" />
            <p>
              The Internet is a global network that connects millions of devices. This big idea covers how the internet works, including protocols, security, and the impact of the internet on society.
            </p>
          </div>
        </div>

        {/* Big Idea 7 */}
        <div className="about-section">
          <h3 className="about-box-title">Big Idea 7</h3>
          <div className="about-box">
            <h4>Global Impact</h4>
            <img src={big7Image} alt="Global Impact" className="about-image" />
            <p>
              Computing has a significant impact on the world. This big idea explores the social, ethical, and economic implications of computing, and how technology can be used to address global challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
