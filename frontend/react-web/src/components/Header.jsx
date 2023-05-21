import React from "react";
import playLogo from "../assets/images/play-square.png"
import {removecokie} from "../utils/cookies"

export default function Header({user=null}){
    return(
        <header >
        <a className="logo" href="#inicia">
            <img src={playLogo} className="logo_play"></img>
            <p className="logotext">Música</p>
            </a>

            {user && (
            <ul>
                <li>{user}</li>
                <li className="close_session" onClick={()=>{removecokie(); location.reload();}}>CERRAR SESION</li>
            </ul>
            )}

        </header>
    )
}