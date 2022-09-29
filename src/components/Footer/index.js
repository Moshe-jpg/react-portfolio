import React, { useState } from "react";
import githubIcon from "../../assets/github-footer.png";
import linkedinIcon from "../../assets/linkedin-footer.png";
import phoneIcon from "../../assets/phone-footer.png";
import emailIcon from "../../assets/gmail-footer.png";
import downArrowImg from "../../assets/down-arrow.jpg";

const Footer = () => {
  const [profiles] = useState([
    {
      icon_img: githubIcon,
      icon_href: "https://github.com/Moshe-jpg",
      img_alt: "github icon"
    },
    {
      icon_img: linkedinIcon,
      icon_href: "https://www.linkedin.com/in/moshe-gadol-8036801b3",
      img_alt: "linkedin icon"
    },
    { icon_img: phoneIcon,
      icon_href: "tel:6475712494",
      img_alt: "phone icon"
    },
    { icon_img: emailIcon,
      icon_href: "mailto:mobgadol@gmail.com",
      img_alt: "email icon"
    },
  ]);

  return (
    <section id="footer">
      <div className="section-statement">
        <h4>
          Reach Out <br></br><img className="down-arrow-img" src={downArrowImg} alt="down arrow"></img>
        </h4>
      </div>
      <div className="footer-section-icons">
        {profiles.map((profile) => (
          <a className="footer-icon" href={profile.icon_href}>
            <img className="footer-icon-img" src={profile.icon_img} alt={profile.img_alt} ></img>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Footer;
