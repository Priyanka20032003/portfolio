import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";
import Popup from "./Popup";
import { Element } from "react-scroll";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.message) {
      setPopupMessage("Please enter required details");
      setShowPopup(true);
      return;
    }

    setIsSubmitting(true); // Disable the form while submitting

    emailjs
      .send(
        "service_pj97vfs",
        "template_c0zfjp8",
        formData,
        "y_4490V8z6__qLhf4"
      )
      .then(
        (response) => {
          setPopupMessage("Message sent successfully!");
          setShowPopup(true);
          setFormData({ name: "", email: "", message: "" }); // Clear the form
          setIsSubmitting(false); // Re-enable the form after successful submission
        },
        (error) => {
          setPopupMessage(
            "Failed to send the message, please try again later."
          );
          setShowPopup(true);
          setIsSubmitting(false); // Re-enable the form if there's an error
        }
      );
  };

  return (
    <Element name="contact">
      <div className="contact">
        <Popup
          message={popupMessage}
          showPopup={showPopup}
          closePopup={() => setShowPopup(false)}
        />
        <div className="container violetbox">
          <div className="contact-Left-Right">
            <div className="contactLeft">
              <div>
                <h3 className="contactH3">
                  Let's discuss <br /> something <span>cool</span> together
                </h3>
              </div>
              <div>
                <h4 className="contactH4">I'm interested in..</h4>
                <div className="intrests">
                  <a href="#" className="intrest">
                    Web Development
                  </a>
                  <a href="#" className="intrest">
                    Frontend Development
                  </a>
                </div>
              </div>
            </div>
            <div className="contactRight">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting} // Disable when submitting
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting} // Disable when submitting
                />
                <textarea
                  name="message"
                  rows="10"
                  cols="50"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting} // Disable when submitting
                />
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </form>
              <div className="icons">
                <a href="https://www.linkedin.com/in/priyanka-g-744860248/">
                  <FontAwesomeIcon className="icon" icon={faLinkedin} />
                </a>
                <a href="mailto:guntamadugupriyanka2003@gmail.com">
                  <FontAwesomeIcon className="icon" icon={faEnvelope} />
                </a>
                <a href="#">
                  <FontAwesomeIcon className="icon" icon={faInstagram} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
