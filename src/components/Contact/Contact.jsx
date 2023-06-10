import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { MdLocationOn, MdLibraryAddCheck } from "react-icons/md";
import "../Contact/contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_vaz8e5j",
      "template_kvnf5jj",
      form.current,
      "kfnhd1s2i_vVB_NIu"
    );
    e.target.reset();
  };
  return (
    <section className="contact" id="contact">
      <h1 className="text-center">Get In Touch</h1>
      <div className="contact-container my-5">
        <div className="contact-info" data-aos="fade-up">
          <div className="contact-info-details">
            <ul>
              <li>
                <MdLocationOn size={"23px"} />
                Sukkur Sindh, Pakistan
              </li>

              <li>
                <span>
                  <FaEnvelope />
                  <a href="mailto:karishmatejwani9@gmail.com" target="_blank">
                    karishmatejwani9@gmail.com
                  </a>{" "}
                </span>
              </li>

              <li>
                <MdLibraryAddCheck size={"20px"} />
                Frontend Developer
              </li>
            </ul>
          </div>
          <div className="contact__social">
            <p className="contact__linkedin">
              <a
                href="https://www.linkedin.com/in/karishma-tejwani-5424a2153/"
                target="_blank"
              >
                <BsLinkedin size={30} />
              </a>
            </p>

            <p className="contact__github">
              <a href="https://github.com/Karishma-tejwani" target="_blank">
                <BsGithub size={30} />
              </a>
            </p>
          </div>
        </div>

        {/* contact form */}
        <form ref={form} onSubmit={sendEmail} data-aos="fade-up">
          <p className="contact__form-group">
            <input
              type="text"
              name="name"
              placeholder="Enter FullName"
              required
            />
          </p>
          <p className="contact__form-group">
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              required
            />
          </p>
          <p className="contact__form-group">
            <input
              type="text"
              name="phone"
              placeholder="Enter phone Number"
              required
            />
          </p>
          <p className="contact__form-group">
            <textarea name="message" rows={7} placeholder="Message" required />
          </p>
          <button type="submit" className="contact-btn">
            Send a message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
