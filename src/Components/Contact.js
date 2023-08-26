import React, { useState } from 'react'
import "./Contact.css"
import Navbar from './Navbar'
import contactImage1 from "../images/contactt.png"

function Contact() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [textArea, setTextArea] = useState("");

  const handleOnChangeName = (event) => {
    setName(event.target.value);
  };
  const handleOnChangeSubject = (event) => {
    setSubject(event.target.value);
  };
  const handleOnChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleOnChangeTextArea = (event) => {
    setTextArea(event.target.value);
  };
  const handleRemoveClick = () => {
    setName("");
    setSubject("");
    setEmail("");
    setTextArea("");
  };
  return (
    <div className='contact'>
       <div className="body">
       <div className="left">
       <img className="image1" src={contactImage1} alt="" />
       </div>
       <div className="right">
       {/* <img className="image1" src={contactImage2} alt="" /> */}
       <h1><strong>Contact us</strong></h1>
       <div className="inputs">
        <input type="text" onChange={handleOnChangeName} placeholder='First Name' value={name}/>
        <input type="text" onChange={handleOnChangeEmail} placeholder='Email' value={email}/>
        <input type="text" onChange={handleOnChangeSubject} placeholder='Subject' value={subject}/>
       </div>
        <textarea className='teaxtarea' placeholder='Enter your Query' rows="4" cols="50" value={textArea} onChange={handleOnChangeTextArea}> </textarea>
        <button className='contactBtn submitBtn' onClick={handleRemoveClick}>Submit</button>
       </div>
       </div>
    </div>
  )
}

export default Contact
