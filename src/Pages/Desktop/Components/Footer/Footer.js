import React from "react";
import s from "./footer.module.css";
import logo_02 from "../../../../Assets/logo/logo_02.png";
import facebook from "../../../../Assets/iconos/facebook.png";
import instagram from "../../../../Assets/iconos/instagram.png";

const Footer = () => {
    return (
      <> 
      <div className={s.container}>
      <div className={s.left}> 
      <img className= {s.FooterLogo} src={logo_02} alt="logoFooter" />
      </div> 
      <div className={s.right}> 
      <img className= {s.ig} src={instagram} alt="IG" />
      <img className= {s.face} src={facebook} alt="Facebook" />
      </div> 
      </div> 
      </>
    );
  };
  
  export default Footer;