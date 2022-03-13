import React from "react";
import s from "./mobile.module.css";
import NavMobile from "./components/NavMobile/NavMobile";
import ic_pin from "../../Assets/iconos/ic_pin.png";
import nav_slider from "../../Assets/nav_slider.png";
import TrendsMobile from "./components/Trends/TrendMobile";
import BlogMobile from "./components/BlogMobile/BlogMobile";
import FooterMobile from "./components/FooterMobile/FooteerMobile";

const Mobile = () => {
    return (
      <> 
     <NavMobile/>
     <div className= {s.container}>
      <div className= {s.sub_container_left}>
      <img className= {s.iconT} src={ic_pin} alt="IconTitle" />
      <h1 className= {s.title}> AMERICA DEL SUR</h1>
      <hr className= {s.hr} />
      <h3 className={s.sub_title}> Lugares maravillos por America del Sur</h3>
    </div>
    <img className= {s.nav_slider} src={nav_slider} alt="nav_slider" />
    </div>
    <TrendsMobile/>
    <BlogMobile/>
     <FooterMobile/> 
      </>
    );
  };
  
  export default Mobile;