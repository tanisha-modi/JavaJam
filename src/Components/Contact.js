import React from 'react'
import "./Contact.css"
import Navbar from './Navbar'
import contactImage1 from "../images/contactt.png"
import contactImage2 from "../images/Rectangle 3.png"

function Contact() {
  return (
    <div className='contact'>
       <div className="body">
       <div className="left">
       <img className="image1" src={contactImage1} alt="" />
       </div>
       <div className="right">
       {/* <img className="image1" src={contactImage2} alt="" /> */}
       </div>
       </div>
    </div>
  )
}

export default Contact
