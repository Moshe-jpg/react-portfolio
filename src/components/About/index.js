import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import mosheImg from "../../assets/moshe-headshot.jpg";

const About = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section id="about">
      <div className="about-moshe">
      <h2 className="not-bold">
        Hi I'm <span className="bold">Moshe</span>
        <br></br>
        I'm a Junior <span className="bold">Full Stack Developer</span>
      </h2>
      <p>I Create Fully Responsive Websites Using The Latest Technologies To Continually Upgrade &#38; Develop My Skills, Enabling Me To Leave Each Client Satisfied With The Results.</p>
      <br></br>
      <br></br>
      <>
      <Button variant="primary" onClick={handleShow}>
        Read More
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Moshe Gadol - Junior Web Developer</Modal.Title>
        </Modal.Header>
        <Modal.Body><p className="about-paragraph">I started my Web Development career path in 2020 with an <a href="https://www.lighthouselabs.ca/en/intro-web-development-course?gclid=Cj0KCQjwj7CZBhDHARIsAPPWv3eqoPJ7V9hJQsoIZmU6g6tFOQELBQO_oZmCRSEci_MjC6HHY3TED6MaAjjnEALw_wcB">intro course</a> provided by <a href="https://www.lighthouselabs.ca/">Lighthouse Labs</a>
      . This sparked my interest in creating functional, attractive websites from the ground up. Upon completion I decided to upgrade
       my skills by taking <a href="https://www.udemy.com/course/the-complete-web-development-bootcamp/">The Complete 2022 Web Development Bootcamp
       </a> provided by <a href="https://www.linkedin.com/in/angela-yu1/">Dr. Angela Yu</a> through <a href="https://www.londonappbrewery.com/">App Brewery</a>.
       I then enrolled in <a href="https://learn.utoronto.ca/programs-courses/courses/3440-uoft-scs-coding-boot-camp">Full Stack Coding Bootcamp</a> provided by <a href="http://learn.utoronto.ca/">University of Toronto</a>.
       This is where my understanding and creativity took off, and I began implementing Full Stack, Responsive websites under the Bootcamps direction.<br></br>
       <br></br>Check out some of my projects on <a href="https://github.com/Moshe-jpg">Github</a>
       </p>
       </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
      </div>
      <div className='moshe-pic-container'>
        <img className="moshe-pic" src={mosheImg} alt="moshe"></img>
      </div>
    </section>
  );
};

export default About;
