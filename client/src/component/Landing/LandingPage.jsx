import React from "react";
import Landing from "../Landing/Landing.module.css";
import { Link } from "react-router-dom";
import charmander from "../../img/charmander.gif";
import linkedin from "../../img/likend.png"
import github from "../../img/gith.png"
import pokemon from "../../img/landing-pokemon-logo.png"
const landingPage = () => {
  return (
     <div >
     
      <img className={Landing.baground} src={charmander} alt="imagen desaperida" />
      <div className={Landing.contDer}>
      <img src={pokemon}  alt= "pokemon" className={Landing.pokemon}/>
       
       <div className={Landing.pokemon}/>
      <div >
        <Link to="/principal">
          <div className={Landing.button}></div>
        </Link>
     
      <div className = {Landing.link}>
        <a
        href="https://www.linkedin.com/in/brian-paez" target="_blanck"  
        
        >

          <img src={linkedin} alt= "linkedin" className={Landing.linkedin} />
        </a>

        <a
        href="https://github.com/br1an17" target="_blanck"
        
        >

          <img src={github} alt= "gitHub" className={Landing.github} />
        </a>
 </div>
          </div>
      </div>
      
     </div>
  );
};
export default landingPage;
