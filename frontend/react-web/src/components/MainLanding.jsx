import React, { useState } from "react";
import playLogo from "../assets/play.png"
import Login from "./LoginRegister";
import LoginRegister from "./LoginRegister";

import { getCookie } from "../utils/cookies";
import { Navigate } from "react-router-dom";

export default function MainLanding(){
    const [miValue,setValue] = useState("None");
    const [isVisibility,setVisibility] = useState(false);
    
    const togleVisibility = ()=>{isVisibility?setVisibility(false):setVisibility(true)}
    
    const session = getCookie()?true:false;
    return(
    <>
            {session &&( <Navigate to="/home" replace={true} />)}
            <LoginRegister miTipo={miValue} isVisibility={isVisibility} togleVisibility={togleVisibility}></LoginRegister>

            <div className="container">
            <div className="left_part_container">
                <p>TU REPRODUCTOR DE MÚSICA DE CONFIANZA. <br/>
                    <span className="texto_rosa">REGISTRATE</span> PARA ESCUCHAR <br/>
                    <span className="texto_azul">MUSICA SIN LIMITE</span>
                </p>
                <div className="session_container">
                    <button className="iniciar_sesion" onClick={()=>{setValue("login"); setVisibility(true)}}>INICIAR SESION</button>
                    <button className="registrate" onClick={()=>{setValue("register"); setVisibility(true)}}>REGISTRATE</button>
                </div>
            </div>
            <div className="right_part_container">
                <div className="big_circle">
                    <img src={playLogo}className="big_logo"></img>
                </div>
                
            </div>
        </div>
    </>
    )
}