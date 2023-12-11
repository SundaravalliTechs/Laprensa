import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logo from '../assest/logo.png';
import './styles/Navbar.css';
import LocationOnIcon from '@mui/icons-material/LocationOn'; 
import { FaBars, FaTimes } from 'react-icons/fa';


const Navbar = () => {

  const [Mobile, setMobile]=useState(false)
  return(
    <nav className="app">
        <div className="com">        
        <div className='logo'>
        <img src={logo}  alt="Background" />
        </div>

        <div className='loc'>
         <LocationOnIcon/>
        <p>FIND AS ON GOOGLE</p>
       </div>
      </div>
        <ul className= {Mobile? "nav-links-mobile" : "nav-links"} onClick={() =>setMobile(false)}>
          <li>
        <Link to="/">ONLINEORDERING</Link>
        </li>
        <li>
           <Link to="/catering">CATERING</Link>
         </li>
        <li>
          <Link to="/hours-location">HOURS & LOCATION</Link>
        </li>
        <li>
          <Link to="/classes">CLASSES</Link>
        </li>
          <li>
           <Link to="/menu">MENU</Link>
         </li>
         <li>
           <Link to="/our-team">OURTEAM</Link>
         </li>
         <li>
           <Link to="/gift-cards">GIFT CARD</Link>
         </li>
        </ul>
        <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile) }>
          {Mobile? <FaTimes />:<FaBars/>}
        </button>
      
    </nav>
  )
}


export default Navbar;









