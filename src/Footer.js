import React from 'react';
import {FaFacebookF,FaPhoneVolume} from "react-icons/fa";
import"./Footer.css";


function Footer() {
  return (
    <footer>
    <div  className="container container-flex">
        <div className ="icon">
          <a href="https://www.facebook.com/growMore19">
        <FaFacebookF className="iconf" />
        </a>
        <h2 className="facebook">join us with facebook</h2>
       



        </div>
       
        <div className="copyright">
            <p> growMore19 : enhance your idea & business.<br/>
            contact us :<FaPhoneVolume className="iconb"/>01786400994</p>


        </div>
        <div className="line">
        <hr></hr>

        </div>

        


    </div>
    </footer>
  );
}

export default Footer;