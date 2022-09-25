import React, { useState } from "react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

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
        <h4 className="contact-header">Contact me</h4>
        <form onSubmit={handleSubmit}>
          <div className="inputBox">
            <input
              type="text"
              defaultValue={name}
              name="name"
              required="required"
              onChange={handleChange}
            />
            <span>Name:</span>
          </div>
          <div className="inputBox">
            <input
              type="email"
              defaultValue={email}
              name="email"
              required="required"
              onChange={handleChange}
            />
            <span>Email address:</span>
          </div>
          <div className="inputBox">
            <input
              name="message"
              defaultValue={message}
              type="text"
              required="required"
              onChange={handleChange}
            />
            <span>Message:</span>
          </div>
          <div className="inputBoxBtnContainer">
            <button type="submit" className="inputBoxBtn">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
