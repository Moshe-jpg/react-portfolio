import React from "react";
import Card from "react-bootstrap/Card";

const About = () => {
  return (
    <section id="about">
      <>
        <Card>
          <Card.Img variant="top" src="moshe-headshot.jpg" alt="Moshe image" />
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                {" "}
                I started coding in 2020 and quickly realized I had a passion as
                well as a natural talent for it. The idea of solving complex
                issues and seeing the results of hard work in real time is so
                incredibly satisfying.{" "}
              </p>
              <footer className="blockquote-footer">
                <cite title="Source Title">Moshe Gadol</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      </>
    </section>
  );
};

export default About;
