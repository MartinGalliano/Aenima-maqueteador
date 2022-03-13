import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import s from "./desktop.module.css";
//"s" es la abreviacion de "styles"
import ic_pin from "../../Assets/iconos/ic_pin.png";
import arrow from "../../Assets/iconos/arrow.png";
import nav_slider2x from "../../Assets/nav_slider2x.png";
import Trends from "./Components/Trends/Trends";
import Blog from "./Components/Blog/Blog";
import Footer from "./Components/Footer/Footer";
const Desktop = () => {
    return (
      <> 
      <NavBar />
      <div className= {s.container}>
      <div className= {s.sub_container_left}>
      <img className= {s.iconT} src={ic_pin} alt="IconTitle" />
      <h1 className= {s.title}> AMERICA DEL SUR</h1>
      <hr className= {s.hr} />
      <h3 className={s.sub_title}> Lugares maravillos por America del Sur</h3>
      <p className={s.text}> Estos son algunos lugares que eligen la mayoria de los turistas que visitan America del Sur</p>
    </div>
    <div className= {s.sub_container_right}>
      <img className= {s.arrowIcon} src={arrow} alt="IconTitle" />
      <h1 className= {s.title_2}> PRÓXIMA AVENTURA</h1>
      <h5 className={s.sub_title_2}> Europa Meridional</h5>
      <p className={s.text_2}> Forman parte veinte paises,ej. España,Francia,etc.</p>
    </div>
    <img className= {s.nav_slider} src={nav_slider2x} alt="nav_slider" />
    </div>
    <Trends/>
    <Blog/>
    <Footer/>
      </>
    );
  };
  
  export default Desktop;
  