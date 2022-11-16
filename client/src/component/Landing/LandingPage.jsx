import React from "react";
import Style from "../Landing/Landing.module.css";
import { Link } from "react-router-dom";
import linkedin from "../../img/likend.png"
import github from "../../img/gith.png"
import pokemon from "../../img/landing-pokemon-logo.png"
import letsGo from "../../img/LETS GO.png"

const landingPage = () => {
  return (
     <div className={Style.baground} >
     
      {/* <img className={Landing.baground} src={charmander} alt="imagen desaperida" /> */}
      <div className={Style.contDer}>
      <img src={pokemon}  alt= "pokemon" className={Style.pokemon}/>
       
       <div className={Style.pokemon}/>
      <div >
        <Link to="/principal">
          <div className={Style.button}></div>
        </Link>
      <img src={letsGo} alt="vamos" className={Style.letsGo} />
      <div className = {Style.link}>
        <a
        href="https://www.linkedin.com/in/brian-paez" target="_blanck"  
        
        >

          <img src={linkedin} alt= "linkedin" className={Style.linkedin} />
        </a>

        <a
        href="https://github.com/br1an17" target="_blanck"
        
        >

          <img src={github} alt= "gitHub" className={Style.github} />
        </a>
 </div>
          </div>
      </div>
      
     </div>
  );
};
export default landingPage;
