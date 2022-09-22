import React, {useState} from "react";

const Contact = () => {

    const [formState, setFormState] = useState({ name: "", email: "", message: "",
});
  const { name, email, message } = formState;

  function handleChange(e) {
    setFormState({...formState, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <section id="contact">
      <div className="thornhill-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92123.91559007706!2d-79.48514002186015!3d43.81700686362543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2c5040f03c07%3A0x89513ec1ecb20db1!2sThornhill%2C%20Vaughan%2C%20ON!5e0!3m2!1sen!2sca!4v1663881562826!5m2!1sen!2sca"
          title="maps"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          alt="maps location"
        ></iframe>
      </div>
      <div className="contact-form">
        <h4>Contact me</h4>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" defaultValue={name} name="name" onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor="email">Email address:</label>
            <input type="email" defaultValue={email} name="email" onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea name="message" defaultValue={message} rows="5" onChange={handleChange}/>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
