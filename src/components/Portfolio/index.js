import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import blogImg from "../../assets/blog.jpg";
import readirectImg from "../../assets/readirect.jpg";
import weatherImg from "../../assets/weather.jpg";
import exerciseImg from "../../assets/exercise.jpg";
import teamImg from "../../assets/team.jpg";
import prodImg from "../../assets/productivity.jpg";

const Portfolio = () => {
  return (
    <section>
      <div id="portfolio">
        <div className="portfolio-card">
          <Card style={{ width: "18rem" }}>
            <Card.Header>Top Featured</Card.Header>
            <Card.Img variant="top" src={blogImg} alt="featured project image" className="card-img"/>
            <Card.Body>
              <Card.Title>Blog Spot</Card.Title>
              <Card.Text>
                A full stack application which allows users to interact with
                each other. Information is stored on a Mysql database.
              </Card.Text>
              <div className="btn-group">
                <Button
                  variant="primary"
                  href="https://blog--spot.herokuapp.com/"
                >
                  Go to Site
                </Button>
                <Button
                  variant="dark"
                  href="https://github.com/Moshe-jpg/blog-spot"
                >
                  Go to Repo
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="portfolio-card">
          <Card style={{ width: "18rem" }}>
            <Card.Header>Top Featured</Card.Header>
            <Card.Img variant="top" src={readirectImg} alt="featured project image" className="card-img" />
            <Card.Body>
              <Card.Title>Readirect</Card.Title>
              <Card.Text>
                A movie/book ratings website that allows users to quickly choose
                between what's the better version of the story; the movie or the
                book.
              </Card.Text>
              <div className="btn-group">
                <Button
                  variant="primary"
                  href="https://katiebutler37.github.io/readirect/"
                >
                  Go to Site
                </Button>
                <Button
                  variant="dark"
                  href="https://github.com/katiebutler37/readirect"
                >
                  Go to Repo
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="portfolio-card">
          <Card style={{ width: "18rem" }}>
            <Card.Header>Top Featured</Card.Header>
            <Card.Img variant="top" src={weatherImg} alt="featured project image" className="card-img" />
            <Card.Body>
              <Card.Title>Feely Weather</Card.Title>
              <Card.Text>
                A weather site that gives you a single day and 5 day forecast
                with a visual representation of Temp, Humidity, UVI and
                Windspeed.
              </Card.Text>
              <div className="btn-group">
                <Button
                  variant="primary"
                  href="https://moshe-jpg.github.io/feely-weather-app/"
                >
                  Go To Site
                </Button>
                <Button
                  variant="dark"
                  href="https://github.com/Moshe-jpg/feely-weather-app"
                >
                  Go To Repo
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="portfolio-card">
          <Card style={{ width: "18rem" }}>
            <Card.Header>Featured</Card.Header>
            <Card.Img variant="top" src={exerciseImg} alt="featured project image" className="card-img" />
            <Card.Body>
              <Card.Title>Run Buddy</Card.Title>
              <Card.Text>
                A basic webpage built for an online exercise startup. It comes with a stylish landing page fully equipped to get Run Buddy new customers.
              </Card.Text>
              <div className="btn-group">
                <Button
                  variant="primary"
                  href="https://moshe-jpg.github.io/run-buddy/"
                >
                  Go To Site
                </Button>
                <Button
                  variant="dark"
                  href="https://github.com/Moshe-jpg/run-buddy"
                >
                  Go To Repo
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="portfolio-card">
          <Card style={{ width: "18rem" }}>
            <Card.Header>Featured</Card.Header>
            <Card.Img variant="top" src={teamImg} alt="featured project image" className="card-img" />
            <Card.Body>
              <Card.Title>Build The Team</Card.Title>
              <Card.Text>
                A team builder website built with inquirer. The user will input
                their team information into prompts and once done it will
                dynamically generate a webpage.
              </Card.Text>
              <div className="btn-group">
                <Button
                  variant="primary"
                  href="https://www.awesomescreenshot.com/video/9887842?key=f308ebe4ec8c3fcb6b8460e1ebe2990e"
                >
                  Go To Video
                </Button>
                <Button
                  variant="dark"
                  href="https://github.com/Moshe-jpg/build-the-team"
                >
                  Go To Repo
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="portfolio-card">
          <Card style={{ width: "18rem" }}>
            <Card.Header>Featured</Card.Header>
            <Card.Img variant="top" src={prodImg} alt="featured project image" className="card-img" />
            <Card.Body>
              <Card.Title>Productivity Workday Scheduler</Card.Title>
              <Card.Text>
                A notetaker which will save your notes in colour coded slots
                based on the amount of time left to perform them.
              </Card.Text>
              <div className="btn-group">
                <Button
                  variant="primary"
                  href="https://moshe-jpg.github.io/Productivity-Work-Day-Scheduler/"
                >
                  Go To Site
                </Button>
                <Button
                  variant="dark"
                  href="https://github.com/Moshe-jpg/Productivity-Work-Day-Scheduler"
                >
                  Go To Repo
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
