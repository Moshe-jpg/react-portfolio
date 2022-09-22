import React from "react";
import mosheImg from "../../assets/moshe-headshot.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="about-moshe">
      <h2>
        Hi I'm Moshe.
        <br></br>
        Full Stack Web Developer with a passion for Front End Development
      </h2>
      <p>I started my Web Development career path in 2020 with an intro course provided by <a href="https://www.lighthouselabs.ca/">Lighthouse Labs</a>
      . This sparked my interest in creating functional, attractive websites from the ground up. After completing that course I decided to upgrade
       my skills by taking <a href="https://www.udemy.com/course/the-complete-web-development-bootcamp/">The Complete 2022 Web Development Bootcamp
       </a> provided by <a href="https://www.linkedin.com/in/angela-yu1/">Dr. Angela Yu</a> through <a href="https://www.londonappbrewery.com/">App Brewery</a></p>
      </div>
      <div>
        <img class="moshe-pic" src={mosheImg} alt="moshe"></img>
      </div>
    </section>
  );
};

export default About;
