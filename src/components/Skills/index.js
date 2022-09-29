import React, { useState } from "react";
import GithubImg from "../../assets/github.jpg";
import JavascriptImg from "../../assets/javascript.png";
import HtmlImg from "../../assets/html.png";
import CssImg from "../../assets/css.png";
import BootstrapImg from "../../assets/bootstrap.png";
import TailwindImg from "../../assets/tailwind.png";
import JqueryImg from "../../assets/jquery.png";
import NodeImg from "../../assets/node.png";
import ReactImg from "../../assets/react.png";
import ExpressImg from "../../assets/express.png";
import HandlebarsImg from "../../assets/handlebars.png";
import MysqlImg from "../../assets/mysql.png";
import SequelizeImg from "../../assets/sequelize.png";
import MongodbImg from "../../assets/mongodb.png";
import MongooseImg from "../../assets/mongoose.png";

const Skills = () => {
  const [mySkills] = useState([
    {
      name: "Javascript",
      skillImg: JavascriptImg,
      skillLink: "https://www.javascript.com/",
    },
    {
      name: "Html",
      skillImg: HtmlImg,
      skillLink: "https://www.w3schools.com/html/",
    },
    {
      name: "Css",
      skillImg: CssImg,
      skillLink: "https://www.w3schools.com/css/",
    },
    { name: "Github", skillImg: GithubImg, skillLink: "https://github.com/" },
    {
      name: "Bootstrap",
      skillImg: BootstrapImg,
      skillLink: "https://getbootstrap.com/",
    },
    {
      name: "Tailwind",
      skillImg: TailwindImg,
      skillLink: "https://tailwindcss.com/",
    },
    { name: "Jquery", skillImg: JqueryImg, skillLink: "https://jquery.com/" },
    { name: "Node JS", skillImg: NodeImg, skillLink: "https://nodejs.org/" },
    { name: "React JS", skillImg: ReactImg, skillLink: "https://reactjs.org/" },
    {
      name: "Express JS",
      skillImg: ExpressImg,
      skillLink: "https://expressjs.com/",
    },
    {
      name: "Handlebars",
      skillImg: HandlebarsImg,
      skillLink: "https://handlebarsjs.com/",
    },
    { name: "Mysql", skillImg: MysqlImg, skillLink: "https://www.mysql.com/" },
    {
      name: "Sequelize",
      skillImg: SequelizeImg,
      skillLink: "https://sequelize.org/",
    },
    {
      name: "MongoDB",
      skillImg: MongodbImg,
      skillLink: "https://www.mongodb.com/",
    },
    {
      name: "Mongoose",
      skillImg: MongooseImg,
      skillLink: "https://mongoosejs.com/",
    },
  ]);

  return (
    <section>
        <div className="section-statement statement-white">
            <h4>My Skills</h4>
        </div>
      <div id="skills">
        {mySkills.map((skill) => (
          <div className="skill">
            <a href={skill.skillLink}>
              <img src={skill.skillImg} className="skill-img" alt={skill.name} ></img>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
