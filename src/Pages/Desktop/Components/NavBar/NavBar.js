import React from "react";
import s from "./navBar.module.css";
import logo_01 from "../../../../Assets/logo/logo_01.png";

const NavBar = () => {
    return (
      <> 
      <div className={s.container}>
      <div className={s.left}> 
      <img className= {s.NavLogo} src={logo_01} alt="logoNav" />
      </div> 
      <div className={s.right}> 
      <h2 className={s.h1E}>Home</h2>
      <h2 className={s.h1}>Tendencias</h2>
      <h2 className={s.h1}>Blog</h2>
      </div> 
      </div> 
      </>
    );
  };
  
  export default NavBar;