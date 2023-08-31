import React, { useState, useRef } from "react";
import "./Contact.css";
import contactImage1 from "../images/contactt.png";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [textArea, setTextArea] = useState("");

  const sendEmail = (e) => {
    alert("form submitted");
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zxvyimg",
        "template_w0numyd",
        form.current,
        "g6JJRhy7HUAyTcDZ7"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("query sent");
        },
        (error) => {
          console.log(error.text);
        }
      );

    handleRemoveClick();
  };
  const handleRemoveClick = () => {
    setName("");
    setSubject("");
    setEmail("");
    setTextArea("");
  };
  return (
    <div className="contact">
      <div className="body">
        <div className="left">
          <img className="image1" src={contactImage1} alt="" />
        </div>
        <div className="right">
          <h1>
            <strong>Contact us</strong>
          </h1>
          <form ref={form} onSubmit={sendEmail}>
            <div className="inputdata">
              <input
                type="text"
                name="user_name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                autoComplete="off"
                required
              />
              <label htmlFor="user_name">Name</label>
            </div>
            <div className="inputdata">
            <input
             className={email ? 'has-content' : ''}
              type="email"
              name="user_email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="off"
              required
            />
            <label htmlFor="user_email">Email</label>
            </div>
            <div className="inputdata">
            <input
              type="text"
              name="user_subject"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
              autoComplete="off"
              required
            />
            <label htmlFor="user_subject">Subject</label>
            </div>
            <textarea
              name="query"
              className="teaxtarea"
              placeholder="Enter your Query"
              rows="4"
              cols="50"
              value={textArea}
              onChange={(event) => setTextArea(event.target.value)}
              autoComplete="off"
              required
            ></textarea>
            <button
              className="contactBtn submitBtn"
              type="submit"
              value="send"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
