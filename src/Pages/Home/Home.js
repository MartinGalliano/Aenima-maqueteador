import React from "react";
import {Link} from 'react-router-dom';
import logoAEN from "../../Assets/logoAEN.jpg";
import s from "./home.module.css";
//"s" es la abreviacion de "styles"
const Home = () => {
    return (
      <> 
    <div className= {s.container}>
    <div className= {s.subcontainer}>
    <img className= {s.imgLogo} src={logoAEN} alt="logoAEN" />
    <h1 className= {s.proto}>PROTOTIPO</h1>
    <Link to="/DESKTOP">
    <button className={`${s.draw_border} ${s.btn}`}>DESKTOP</button>
    </Link>
    <Link to="/MOBILE"> 
    <button className={`${s.draw_border} ${s.btn}`}>MOBILE</button>
    </Link>
    </div>
    </div>
      </>
    );
  };
  
  export default Home;
  