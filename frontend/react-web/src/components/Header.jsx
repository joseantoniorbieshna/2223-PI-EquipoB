import React from "react";
import playLogo from "../assets/play.png"

export default function Header(){
    return(
        <header >
        <a className="logo" href="#inicia">
            <div className="logo_circle">
                <img src={playLogo} className="logo_play"></img>
            </div>
            <p className="logotext">Música</p>
        </a>
        </header>
    )
}