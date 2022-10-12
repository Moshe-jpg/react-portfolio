import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import blogImg from "../../assets/blog.jpg";
import readirectImg from "../../assets/readirect.jpg";
import weatherImg from "../../assets/weather.jpg";
import exerciseImg from "../../assets/exercise.jpg";
import teamImg from "../../assets/team.jpg";
import prodImg from "../../assets/productivity.jpg";
import innerPatternImg from "../../assets/inner-pattern.png";

const Portfolio = () => {
  const [projects] = useState([
    {
      header: "Top Featured",
      img: innerPatternImg,
      name: "InnerPattern",
      text: "A mental health tracker application. It will empower users to keep track of their thoughts and accompanying mood. ",
      site_href: "http://innerpattern.herokuapp.com//",
      repo_href: "https://github.com/Tyl3r-s/InnerPattern"
    },
    {
      header: "Top Featured",
      img: blogImg,
      name: "Blog Spot",
      text: "A full stack application which allows users to interact with each other. Information is stored on a Mysql database.",
      site_href: "https://blog--spot.herokuapp.com/",
      repo_href: "https://github.com/Moshe-jpg/blog-spot"
    },
    {
      header: "Top Featured",
      img: readirectImg,
      name: "Readirect",
      text: "A movie/book ratings website that allows users to quickly choose between what's the better version of the story.",
      site_href: "https://katiebutler37.github.io/readirect/",
      repo_href: "https://github.com/katiebutler37/readirect"
    },
    {
      header: "Top Featured",
      img: weatherImg,
      name: "Feely Weather",
      text: "A weather site that gives you a single day and 5 day forecast with a visual representation of Temp, Humidity, UVI and Windspeed.",
      site_href: "https://moshe-jpg.github.io/feely-weather-app/",
      repo_href: "https://github.com/Moshe-jpg/feely-weather-app"
    },
    {
      header: "Featured",
      img: exerciseImg,
      name: "Run Buddy",
      text: "A basic webpage built for an online exercise startup. It comes with a stylish landing page fully equipped to get Run Buddy new customers.",
      site_href: "https://moshe-jpg.github.io/run-buddy/",
      repo_href: "https://github.com/Moshe-jpg/run-buddy"
    },
    {
      header: "Featured",
      img: teamImg,
      name: "Build The Team",
      text: "A team builder website built with inquirer. The user will input their team information into prompts and it will dynamically generate a webpage.",
      site_href: "https://www.awesomescreenshot.com/video/9887842?key=f308ebe4ec8c3fcb6b8460e1ebe2990e",
      repo_href: "https://github.com/Moshe-jpg/build-the-team"
    },
    {
      header: "Featured",
      img: prodImg,
      name: "Productivity Workday Scheduler",
      text: "A notetaker which will save your notes in colour coded slots based on the amount of time left to perform them. Useful for getting tasks done.",
      site_href: "https://moshe-jpg.github.io/Productivity-Work-Day-Scheduler/",
      repo_href: "https://github.com/Moshe-jpg/Productivity-Work-Day-Scheduler"
    },
  ]);

  return (

    <section>
      <div className="section-statement statement-white">
            <h4>My Portfolio</h4>
        </div>
      <div id="portfolio">
        {projects.map((project) => (
          <div className="about-card">
            <Card style={{ width: "18rem" }}>
              <Card.Header>{project.header}</Card.Header>
              <Card.Img variant="top" src={project.img} alt={project.name} className="card-img"/>
              <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>{project.text}</Card.Text>
                <div className="btn-group">
                    <Button variant="primary" href={project.site_href} className="about-card-btn" >Go to Site</Button>
                    <Button variant="dark" href={project.repo_href} className="about-card-btn" >Go to Repo</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
