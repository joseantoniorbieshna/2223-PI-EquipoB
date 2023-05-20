import React from "react";
import playLogo from "../assets/images/play-square.png"

export default function Header(){
    return(
        <header >
        <a className="logo" href="#inicia">
            <img src={playLogo} className="logo_play"></img>
            <p className="logotext">Música</p>
        </a>
        </header>
    )
}