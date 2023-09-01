import React from 'react'
import './Footer.css'
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'
import mail from '../images/mail.png'
 
function Footer() {
  return (
    <div className='footer'>
        <div className="leaf"></div>
      <div className="box b1">
      <h3>Tanisha Modi</h3>
        <p>Developer</p>
        <div class="social">
        <a href="https://www.linkedin.com/in/tanisha-modi/"><img src={linkedin} alt="" /></a>
        <a href="https://github.com/tanisha-modi"><img src={github} alt="" /></a>
        <a href="mailto:tanishamodi12@gmail.com"><img src={mail} alt="" /></a>
      </div>
      </div>
      <div className="box b2">
        <h3>Rajnandini Patel</h3>
        <p>Designer</p>
        <div class="social">
        <a href="#"><img src={linkedin} alt="" /></a>
        <a href="#"><img src={github} alt="" /></a>
        <a href="#"><img src={mail} alt="" /></a>
      </div>
      </div>
    </div>
  )
}

export default Footer
