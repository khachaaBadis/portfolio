import React from "react";
import "./about.css";
import ME from "../../assets/pic2.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>5+</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ completed </small>
            </article>
          </div>
          <p>
            Motivated, creative, endowed with a great thirst for learning and a
            good sense of organization, I hold a license in information
            technology at the Higher Institute of Computing and
            Telecommunications. 
            
            <br></br>
            Currently I am a 3rd year bachelor student in
            web and mobile development at MyDigitalSchool and I am looking for
            an apprenticeship that will allow me to develop and deepen my
            knowledge for my master's degree in data and web development
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
