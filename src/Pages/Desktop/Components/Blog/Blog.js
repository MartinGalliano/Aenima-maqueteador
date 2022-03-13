import React from "react";
import s from "./blog.module.css";
// "s" es la abreviacion de styles
import articulo_big_01 from "../../../../Assets/img/articulo_big_01.png";
import articulo_big_02 from "../../../../Assets/img/articulo_big_02.png";

import articulo_small_01 from "../../../../Assets/img/articulo_small_01.png";
import articulo_small_02 from "../../../../Assets/img/articulo_small_02.png";
import articulo_small_03 from "../../../../Assets/img/articulo_small_03.png";

import time from "../../../../Assets/iconos/time.png";

const Blog = () => {
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

<div className={s.S_art_container}>
<img className={s.arts1} src={articulo_small_01} alt="art.01"/>
<h2 className={s.h21}>Articulo de elefante</h2>
<img className={s.time1} src={time} alt="Time"/>
<h5 className={s.h51}>Hace 3h </h5>
<img className={s.arts2} src={articulo_small_02} alt="art.02"/>
<h2 className={s.h22}>Articulo de loro</h2>
<img className={s.time2} src={time} alt="Time"/>
<h5 className={s.h52}>Hace 4h </h5>
<img className={s.arts3} src={articulo_small_03} alt="art.01"/>
<h2 className={s.h22}>Articulo de camino</h2>
<img className={s.time2} src={time} alt="Time"/>
<h5 className={s.h52}>Hace 8h </h5>
</div>
</div>
</>
 );
};

export default Blog;