import React from 'react';
import"./Services.css";
import Servicedata from "./Servicedata";
import po1 from"../portImage/ks.jpg";
import po2 from"../portImage/m.PNG";
import po3 from"../portImage/e.PNG";
import po4 from"../portImage/ge.PNG";






function Services() {
  return (
  
    <div className="services">

    <h1>Our Services</h1>
    <h4>WHAT WE DO. </h4>
        



  <div className="service-card">

    <Servicedata
image={po1}
heading="WEB DESIGN & DEVELOPEMENT"
text=" We have a proficient team for making onlin platform"

/>
<Servicedata
image={po2}

heading="Marketing"
text=" We introduce a better marketing plan that enhance your businses"

/>
<Servicedata
image={po3}

heading=" Enterprise website"
text=" We will deliver a enterprize website verry short time"

/>
<Servicedata
image={po4}

heading="Graphics desigining"
text=" We will provide a dreamy design for you"

/>




  </div>

  
  
</div>

 

  );
}

export default Services;