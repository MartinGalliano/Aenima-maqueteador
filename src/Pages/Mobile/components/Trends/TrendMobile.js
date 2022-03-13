import React from "react";
import s from "./trendsMobile.module.css";
//"s" es la abreviacion de "styles"
import card_01 from "../../../../Assets/img/card_01.png";


const TrendsMobile = () => {
    return (
      <> 
      <div className= {s.container}>
      <div className= {s.trends}>TENDENCIAS</div>
     
      <div className= {s.sub_container}>
      
      <div className= {s.card}>
				<h1 className={s.h1} >Nuevo</h1>
      <img className={s.img} src={card_01} alt="Montaña" />
		
    	<div className={s.textCard}>
					<div className={s.name}> Montañas y magia</div>
					<div className={s.genres}>aquí la descripción para <span className={s.span}>Montañas y magia.</span> </div>
			</div>
      
		</div>
       
        </div>
      </div>
      </>
    );
  };
  
  export default TrendsMobile;