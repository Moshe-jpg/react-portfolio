import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yzucm0t",
        "contact_form",
        form.current,
        "iwUP8eH1NlcSvoxkb"
      )
      .then(
        (result) => {
          console.log(result.text);
          let inputs = document.querySelectorAll("input");
          inputs.forEach((input) => (input.value = ""));

          let contactHeader = document.getElementById("contact-header");
          contactHeader.style.fontSize = "35px";
          contactHeader.style.color = "green";
          contactHeader.textContent = "Message Sent ✔";

          let submitBtn = document.getElementById("submitBtn");
          submitBtn.style.backgroundColor = "green";

        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <iframe
        className="thornhill-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92123.91559007706!2d-79.48514002186015!3d43.81700686362543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2c5040f03c07%3A0x89513ec1ecb20db1!2sThornhill%2C%20Vaughan%2C%20ON!5e0!3m2!1sen!2sca!4v1663881562826!5m2!1sen!2sca"
        title="maps"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        alt="maps location"
      ></iframe>
      <div className="contact-form">
        <h4 className="contact-header" id="contact-header">
          Contact me
        </h4>
        <form ref={form} onSubmit={sendEmail}>
          <div className="inputBox">
            <input
              type="text"
              name="user_name"
              required="required"
              className="input1"
            />
            <span>Name:</span>
          </div>
          <div className="inputBox">
            <input type="email" name="user_email" required="required" />
            <span>Email address:</span>
          </div>
          <div className="inputBox inputBoxMessage">
            <input name="message" type="text" required="required" className="inputBoxMessageInput"/>
            <span>Message:</span>
          </div>
          <div className="inputBoxBtnContainer">
            <button type="submit" className="inputBoxBtn" value="send" id="submitBtn" >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
