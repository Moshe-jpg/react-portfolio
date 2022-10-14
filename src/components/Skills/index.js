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
      description:
        "Used to create dynamic and interactive web content like applications and browsers.",
      skillImg: JavascriptImg,
      skillLink: "https://www.javascript.com/",
    },
    {
      name: "Html",
      description:
        "(HyperText Markup Language) is the code that is used to structure a web page and its content.",
      skillImg: HtmlImg,
      skillLink: "https://www.w3schools.com/html/",
    },
    {
      name: "Css",
      description:
        "A computer language for laying out and structuring web pages (HTML or XML). It controls design",
      skillImg: CssImg,
      skillLink: "https://www.w3schools.com/css/",
    },
    {
      name: "Github",
      description:
        "A code hosting platform for version control and collaboration. Create projects from anywhere.",
      skillImg: GithubImg,
      skillLink: "https://github.com/",
    },
    {
      name: "Bootstrap",
      description:
        "A free, open source front-end development framework for the creation of websites and web apps.",
      skillImg: BootstrapImg,
      skillLink: "https://getbootstrap.com/",
    },
    {
      name: "Tailwind",
      description:
        "By using this utility-first framework, you don't have to write custom CSS to style your application.",
      skillImg: TailwindImg,
      skillLink: "https://tailwindcss.com/",
    },
    {
      name: "Jquery",
      description:
        "Common tasks that require many lines of JavaScript code to accomplish are reduced to a single line of code.",
      skillImg: JqueryImg,
      skillLink: "https://jquery.com/",
    },
    {
      name: "Node JS",
      description:
        "Used for server-side programming, and primarily deployed for non-blocking, event-driven servers.",
      skillImg: NodeImg,
      skillLink: "https://nodejs.org/",
    },
    {
      name: "React JS",
      description:
        "Used for building interactive user interfaces and web applications quickly and efficiently with less code.",
      skillImg: ReactImg,
      skillLink: "https://reactjs.org/",
    },
    {
      name: "Express JS",
      description:
        "Provides broad features for building web/mobile applications. It is used to build SPA's, multipage, and hybrid apps.",
      skillImg: ExpressImg,
      skillLink: "https://expressjs.com/",
    },
    {
      name: "Handlebars",
      description:
        "Used to keep your HTML pages simple and clean and decoupled from the logic-based JavaScript files.",
      skillImg: HandlebarsImg,
      skillLink: "https://handlebarsjs.com/",
    },
    {
      name: "Mysql",
      description:
        "A tool used to manage databases and servers, while not a database, it's used for managing and organising data.",
      skillImg: MysqlImg,
      skillLink: "https://www.mysql.com/",
    },
    {
      name: "Sequelize",
      description:
        "An ORM that makes it easy to work with MySQL, MariaDB, SQLite, PostgreSQL databases, and more.",
      skillImg: SequelizeImg,
      skillLink: "https://sequelize.org/",
    },
    {
      name: "MongoDB",
      description:
        "A document database used to build highly available/scalable internet applications with its flexible schema approach.",
      skillImg: MongodbImg,
      skillLink: "https://www.mongodb.com/",
    },
    {
      name: "Mongoose",
      description:
        "An ODM library for MongoDB and Node. js. It manages data, provides schema validation, and is used to translate between objects.",
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
          <div className="skill-card">
            <div className="circle">
              <img className="logo" alt={skill.name} src={skill.skillImg}></img>
            </div>
            <div class="content">
              <h2>{skill.name}</h2>
              <p className="skill-desc">{skill.description}</p>
              <a className="skill-link" href={skill.skillLink}>
                Explore
              </a>
            </div>
            <img src={skill.skillImg} alt={skill.name} class="skill-img" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
