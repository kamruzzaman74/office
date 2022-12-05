import React from "react";
import {NavLink} from "react-router-dom";
import"./Home.css"
import Services from"./Services";
import Blog from "./Blog";
function Home() {
  return (
    <>
    <div className="mainSection">
       <div className="contentBox">
             <h1>Build a online platform for your business & start-up.</h1>

             <p>growMore19 is a software development company designs and develops custom software applications, 
              frameworks, and tools that help solve problems or achieve a specific outcome.
              Our company consists of the development, distribution, and maintenance of software. It can be broadly divided into application software, 
              system infrastructure software, software-as-a-service (SaaS), operating systems, database and analytics software.
              
              </p>
              <div className="btnBox">

                <div className="btn">

                <NavLink to="/about" className="read-more" >Read More </NavLink>
                </div>
              </div>
               </div>
               <div className="imageContainer">
               <img className="im2" src="./image/u.jpg" alt=""/>
               
               
               
               
               <h3>increase your oppourtunity</h3>
               



               </div>


        
    </div>

    <Services/>
    <Blog/>
    </>
  );
}

export default Home;