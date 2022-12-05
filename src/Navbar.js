import React from 'react';
import "./Navbar.css";

import {FaHouzz,FaFeather,FaPhoneVolume, FaSubway,FaBloggerB} from "react-icons/fa";
import {NavLink} from "react-router-dom";



function Navbar() {
  
  return (
    <header>

    

<nav >
  
    <div className="logo-contain">
      <img className="logo" src="./image/k.PNG" alt="logo"/>
      
      
      </div>
       
        <div className="list">

          <NavLink to="/" className="listItem"   > <FaHouzz className="icon"/>Home</NavLink>

          <NavLink to="/about" className="listItem" ><FaFeather className="icon"/>About  </NavLink>

          <NavLink to="/contact" className="listItem"><FaPhoneVolume className="icon"/> Contact  </NavLink>

          <NavLink to="/services" className="listItem" > < FaSubway className="icon"/>Services   </NavLink>
          <NavLink to="/blog" className="listItem" > < FaBloggerB className="icon"/>Blog </NavLink>

          </div>
        

        </nav>



      



      






      
        </header>
    
  
  );
}

export default Navbar;