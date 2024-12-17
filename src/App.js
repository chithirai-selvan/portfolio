import React from "react";
import { FaGithub, FaBehance, FaCamera, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import "./App.css"; // Custom CSS for styling
import photocs from './assets/photocs.jpg';
import uiux from './assets/uiux.jpg';
import bg from './assets/bg.png';
import htmlLogo from './assets/htmlLogo.png';
import cssLogo from './assets/cssLogo.png';
import jsLogo from './assets/jsLogo.png';
import reactLogo from './assets/reactLogo.png';
import figmaLogo from './assets/figmaLogo.png';
import pythonLogo from './assets/pythonLogo.png';
import sqlLogo from './assets/sqlLogo.png';
import skillicon from './assets/skillicon.png';
import AchievementsSlider from './assets/components/AchievementsSlider'; // Importing Achievements Component

const App = () => {
  return (
    <div className="portfolio-container">
      {/* Header Section */}
      <header className="header">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Chithirai Selvan
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          UI/UX Designer | Front-End Developer | Rotaractor | Photographer
        </motion.p>
      </header>

      <div className="myimg" id="myimg-edit">
        <img loading="lazy" src={photocs} alt="Chithirai Selvan" />
      </div>
      <br />

      {/* Career Objective */}
      <motion.section
        className="section"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="card-bg">
          <h2>Who Am I</h2>
          <div className="aboutme-brief">
            <p className="aboutme">
              Design devotee and a UI/UX designer with a strong passion for learning front-end tools. I focus on creating user-centered designs and always strive to improve my skills in both design and development to build innovative and functional digital experiences.
            </p>
          </div>
        </div>
      </motion.section>

      <div>
        <img src={bg} className="uiux-clipart" alt="UI/UX Background" />
      </div>

      {/* Education */}
      <motion.section
        className="section"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="card-bg education-section">
          <h2>Education</h2>
          <div className="aboutme-brief">
            <ul>
              <li><strong>BSC Computer Science</strong> (2022-2025), SRM University - CGPA: 9.57</li>
              <li>HSLC, Vana Vani Matric Hr Sec School, IIT Campus - Grade: 70%</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section
        className="section skills-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="skill-section-bg skill-bg">
          <h2>Skills</h2>
          <br />
          <div className="tech-skills-container">
            <div className="tech-logo"><img src={figmaLogo} alt="Figma" /></div>
            <div className="tech-logo"><img src={htmlLogo} alt="HTML" /></div>
            <div className="tech-logo"><img src={cssLogo} alt="CSS" /></div>
            <div className="tech-logo"><img src={jsLogo} alt="JavaScript" /></div>
            <div className="tech-logo"><img src={reactLogo} alt="React" /></div>
            <div className="tech-logo"><img src={sqlLogo} alt="SQL" /></div>
            <div className="tech-logo"><img src={pythonLogo} alt="Python" /></div>
          </div>
        </div>
      </motion.section>

      {/* Achievements */}
      <motion.section
        className="section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="card-bg-achievement">
          <AchievementsSlider />
        </div>
      </motion.section>

      {/* Experience */}
      <motion.section
        className="section exp-sec expfull"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      > <div  className='skillicon'> 
         <img src={skillicon}></img>
      </div>
        <br /><br />
        <h2 className="timeline-header">Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">Nov 2024 - Jan 2025</div>
            <div className="timeline-content">
              <h3>L&T Constructions</h3>
              <p>Intern | Part of Digital Team</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">Jan 2024 - Apr 2024</div>
            <div className="timeline-content">
              <h3>Nipix Tech</h3>
              <p>Design Intern | Deep dive in UI/UX, Designed School & PC Builders Websites.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">Nov 2022 - Feb 2023</div>
            <div className="timeline-content">
              <h3>PK Innovatives</h3>
              <p>UI/UX Intern | Flipkart UI/UX clone and conceptual sketches for apps.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Works */}
      <motion.section
        className="section works-section  works"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Works</h2>
        <ul>
          <li><FaBehance /> <a href="https://www.behance.net/siddhusakthi">Behance </a> (UI/UX WORKS)</li>
          <li><FaGithub /> <a href="https://chithirai-selvan.github.io/landingpage/">Landing Page</a></li>
          <li><FaGithub /> <a href="https://chithirai-selvan.github.io/careerguidance/">Career Guidance Page</a></li>
          <li><FaLinkedin /> <a href="https://www.linkedin.com/in/chithirai-selvan">LinkedIn</a></li>
        </ul>
      </motion.section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Chithirai Selvan. All Rights Reserved.</p>
        {/* <div className="social-icons">
          <FaCamera /> Photography
        </div> */}
      </footer>
    </div>
  );
};

export default App;
