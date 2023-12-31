import React from 'react'
import "./Navbar.css";
// import { useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom';


function Navbar() {
  // const navigate = useNavigate();


  return (
    <div className='nav'>
      <Link  className='logoLink' to='/' ><h1 className='logo'>JavaJam </h1></Link>
      <div className="buttons">
      <button className='navBtn downloadBtn'><a href='https://drive.google.com/uc?export=download&id=1SPqRDc-kSGef-LLp9yKcNxetVHNknbP9
'>Download</a></button>
      <Link className='link' to='/contact'><button className='contactBtn navBtn'>Contact us</button></Link>
      {/* onClick={() => navigate('/contact')} */}
      </div>
    </div>
  )
}

export default Navbar
