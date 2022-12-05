import React from "react";
import"./About.css";
import Aboutdata from "./Aboutdata";
import port1 from"../portImage/k74.jpg";
import port4 from"../portImage/ns.PNG";
import port2 from"../portImage/dada.jpg";
import port3 from"../portImage/p.PNG";

function About() {
  return (
    
        <div className="portfolio">

          <h1>Our story</h1>
          <h4>It was in 2021, with little capital but a pocketful of belief we started Brain growMore19,
             a software company, right after graduating from Nsu. 
             The new company initially focused on the international market with the local market added in 2022.
              Since then the company has shown a continuous growth. </h4>
              



        <div className="aboutcard">

          <Aboutdata
    image={port1}
    heading="KARNA (Executive Officer)"
    text=" It was in winter 2021, with a pocketful hope, 
    karna started  growMore19, a software company, 
    right after graduating from NSU. The new company 
     focused on the international market with the local market."

  />

<Aboutdata
    image={port4}
    heading="Nahid Lasker"
    text=" It was in winter 2021, with a pocketful hope, 
    lasker started  growMore19, a software company, 
    right after graduating from NSU. The new company 
    focused on the international market with the local market"

  />
  <Aboutdata
    image={port2}
    
    heading="suvo (project Manager)"
    
    text=" It was in 2022, with  a pocketful of belief our project Manager, 
    SHUVO started with growMore19, 
    right after graduating from SUST.The new company 
    focused on the international market with the local market  "

  />
  <Aboutdata
    image={port3}
    heading="pritom (Managing partner )"
    
    text=" It was in 2022, with  a pocketful of belief our Managing partner, 
    pritom started journey with growMore19.
    right after graduating from NSU. "

  />
 

        </div>
        
    </div>
  );
}

export default About;