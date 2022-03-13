import React from "react";
import s from "./blogMobile.module.css";
// "s" es la abreviacion de styles
import articulo_big_01 from "../../../../Assets/img/articulo_big_01.png";
import articulo_big_02 from "../../../../Assets/img/articulo_big_02.png";

import time from "../../../../Assets/iconos/time.png";

const BlogMobile = () => {
return (
<>
<h1 className= {s.blog}>BLOG</h1>

<div className={s.container}> 

<div className={s.B_art_container}> 
<img className={s.artb1} src={articulo_big_01} alt="art.01"/>
<h5 className={s.tag}>Ciudad</h5>
<h2 className={s.title}>Articulo de puente</h2>
<p className={s.text}>Un puente es una construcción que permite salvar un accidente geográfico</p>
<img className={s.timeb1} src={time} alt="Time"/>
<h5 className={s.h5b1}>Hace 2m </h5>


<img className={s.artb2} src={articulo_big_02} alt="art.02"/>
<h5 className={s.tag2}>Aventura</h5>
<h2 className={s.title2}>Articulo de bosque</h2>
<p className={s.text2}>Lugar poblado de árboles y arbustos. Área con una imporante densidad de</p>
<img className={s.timeb2} src={time} alt="Time"/>
<h5 className={s.h5b2}>Hace 15m </h5>
</div>


</div>
</>
 );
};

export default BlogMobile;