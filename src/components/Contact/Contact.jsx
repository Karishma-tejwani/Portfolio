import contact from "../../assets/contact.jpg";
import { FaEnvelope } from "react-icons/fa";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "../Contact/contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_9e7ksxo",
      "template_kvnf5jj",
      form.current,
      "kfnhd1s2i_vVB_NIu"
    );
    e.target.reset();
  };
  return (
    <section className="contact">
      <h1 className="text-center">Get In Touch</h1>
      <div className="contact-container my-5">
        <div className="contact-opts">
          <img
            src={contact}
            alt="contact"
            className="rounded mx-5 contact-img"
          />
          <p className="contact-text">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown Lorem ipsum, or lipsum as it is sometimes
            known
          </p>
          <article className="contact-opt">
            <span>
              <FaEnvelope />
              karishmatejwani9@gmail.com
            </span>
            <br />
            <a href="mailto:karishmatejwani9@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>
        </div>

        {/* contact form */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Enter Fullname"
            required
          />
          <input type="email" name="email" placeholder="Enter Email" required />
          <input
            type="text"
            name="phone"
            placeholder="Enter phone number"
            required
          />
          <textarea name="message" rows={7} placeholder="Message" required />
          <button className="btn btn-primary contact-btn">
            Send a message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
