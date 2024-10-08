import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectDetails = {
    har: {
      title: "Human Activity Recognition using LSTM-RNN",
      description: "Developed a system to recognize human activities using sensor data from smartphones, leveraging Long Short-Term Memory (LSTM) Recurrent Neural Networks (RNN) for accurate predictions."
    },
    ebike: {
      title: "E-Bike Challenge (Hero-SIEP)",
      description: "Worked on a project called E-bike where a team of 20 members worked on two different sections of E-bike like Electrical and Mechanical and developed a fully electric bike by retrofitting. Represented it to a competition called Hero E-bike challenge which was held at Noida, Uttar Pradesh and won the Future Award."
    },
    laneDetection: {
      title: "Lane Detection using Deep Learning",
      description: "Implemented Row-wise LiDAR Lane Detection Network with Lane Correlation Refinement (RLLDN-LC), aimed at enhancing lane prediction accuracy using the K-Lane dataset."
    },
    covidMonitoring: {
      title: "Covid Monitoring Device",
      description: "Successfully contributed to the design and implementation of a Covid monitoring device using various sensors and Arduino Uno. Integrated sensors for temperature, pulse oximetry, and respiratory rate monitoring."
    }
  };

  return (
    <div>
      <div className="hero-section text-white text-center">
        <div className="container">
          <h1 className="display-3 animated-text">Abdul Ayaaz</h1>
          <p className="lead animated-text-delay">Welcome to my portfolio. A passionate coder with a focus on Machine Learning and Software Development.</p>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container">
          <a className="navbar-brand" href="#profile">Portfolio</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#profile">Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#education">Education</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section id="profile" className="p-5 text-center bg-light">
        <div className="container">
          <h2>About Me</h2>
          <img src="/profile.jpg" alt="Abdul Ayaaz" className="profile-photo" />
          <p className="lead">A diligent and organized individual with a deep interest in coding and machine learning. Dedicated to academic excellence and personal growth.</p>
        </div>
      </section>

      <section id="education" className="p-5 text-center">
        <div className="container">
          <h2>Education</h2>
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Bachelors in Electronics and Computer Engineering</h5>
              <p className="card-text">Amrita School of Engineering (CGPA: 7.14)</p>
            </div>
          </div>
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">12th, State Board</h5>
              <p className="card-text">Farook Higher Secondary School (85%)</p>
            </div>
          </div>
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">10th, CBSE Board</h5>
              <p className="card-text">Malabar Public School (84.6%)</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="p-5 bg-light text-center">
        <div className="container">
          <h2>Projects</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="card project-card mb-3" onClick={() => setSelectedProject('har')}>
                <div className="card-body">
                  <h5 className="card-title">Human Activity Recognition using LSTM-RNN</h5>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card project-card mb-3" onClick={() => setSelectedProject('ebike')}>
                <div className="card-body">
                  <h5 className="card-title">E-Bike Challenge (Hero-SIEP)</h5>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card project-card mb-3" onClick={() => setSelectedProject('laneDetection')}>
                <div className="card-body">
                  <h5 className="card-title">Lane Detection using Deep Learning</h5>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card project-card mb-3" onClick={() => setSelectedProject('covidMonitoring')}>
                <div className="card-body">
                  <h5 className="card-title">Covid Monitoring Device</h5>
                </div>
              </div>
            </div>
          </div>

          {selectedProject && (
            <div className="card mt-4">
              <div className="card-body">
                <h5 className="card-title">{projectDetails[selectedProject].title}</h5>
                <p className="card-text">{projectDetails[selectedProject].description}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="skills" className="p-5 text-center">
        <div className="container">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-item">
              <img src="/python.jpg" alt="Python" className="skill-image" />
              <p>Python</p>
            </div>
            <div className="skill-item">
              <img src="/html.png" alt="HTML" className="skill-image" />
              <p>HTML</p>
            </div>
            <div className="skill-item">
              <img src="/css.png" alt="CSS" className="skill-image" />
              <p>CSS</p>
            </div>
            <div className="skill-item">
              <img src="/sql.png" alt="SQL" className="skill-image" />
              <p>SQL</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="p-5 bg-dark text-white text-center">
        <div className="container">
          <h2>Contact</h2>
          <p>Email: ayaazsalim123@gmail.com</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/ayaaz-salim-77673723a" className="text-white">View LinkedIn Profile</a></p>
          <p>Phone: +91 9895845204</p>
        </div>
      </section>

      <footer className="p-3 bg-light text-dark text-center">
        <div className="container">
          <p>&copy; 2024 Abdul Ayaaz | Portfolio</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
