import React from "react";
import Logolaranja from '../../imagens/Logolaranja.png'
import styles from './style.module.css'

export default function Navbar(){

    return(
    <>
        <nav className={styles.container}>
            <div>
                <img src={Logolaranja} />
            </div>

            <div >
                <ul className={styles.containerLinks}>
                    <li><a className={styles.corLinkPrimario} href="#">Cadastro</a></li>
                    <li><a className={styles.corLinkSecundaria} href="#">Login</a></li>
                </ul>
            </div>
        </nav>
    </>
    )
}