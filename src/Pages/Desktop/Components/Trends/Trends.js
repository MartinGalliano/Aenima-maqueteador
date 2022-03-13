import React from "react";
import s from "./trends.module.css";
//"s" es la abreviacion de "styles"
import card_01 from "../../../../Assets/img/card_01.png";
import card_02 from "../../../../Assets/img/card_02.png";
import card_03 from "../../../../Assets/img/card_03.png";

const Trends = () => {
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
       
        <div className= {s.card}>
        <img className={s.img} src={card_02} alt="Montaña" />
			  
          <div className={s.textCard}>
					<div className={s.name}>Playa y sol</div>
					<div className={s.genres}>La descripccion de<span className={s.span}> Playa y sol </span> debe de ser esta.</div>
				
			</div>
		</div>
        
        <div className= {s.card}>
      <img className={s.img} src={card_03} alt="Montaña" />
			<div className={s.textCard}>
				
					<div className={s.name}>Nieve y aventura</div>
					<div className={s.genres}>Contiene la informacion de <span className={s.span}> Nieve y aventura.</span></div>
				
			</div>
		</div>
        </div>
      </div>
      </>
    );
  };
  
  export default Trends;