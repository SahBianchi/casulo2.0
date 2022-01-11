import React from "react";
import HomeIlustra1 from '../../imagens/Home-ilustra1.png'
import styles from './style.module.css'
import Botao from "../Botao";

export default function MentoradoLandingPage(){

    return(
    <div className={styles.container}>
        <div className={styles.texto}>
            <p>Encontre um <strong>mentor</strong>, planeje sua <strong>trajetória</strong> e alcance suas metas de <strong>carreira tech</strong>!</p>
            <Botao type="primario" onClick={()=>{
                console.log("fui clicado")
            }}>Começar minha trajetória!</Botao>
        </div>
        
        <div>
            <img src={HomeIlustra1} />
        </div>
    </div>
    )
}