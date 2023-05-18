import React, { useState } from "react";
import {createUser,loginUser} from "../services/queryUser"
import "./css/LoginRegister.css"


export default function LoginRegister({miTipo,isVisibility,togleVisibility}){

    const handlerForm=(event)=>{
        event.preventDefault()
        const {email,user,password} = event.target
        if(email && user && password){
            createUser(email.value,user.value,password.value)
            event.target.reset()
        }else if(user && password){
            loginUser(user.value,password.value);
            event.target.reset()
        }
    }
    
    return(
        <>
        {isVisibility && (
            <div className="login">
            <input type="button" value="X" className="close"  onClick={()=>{togleVisibility()}}/>
            <h1 className="title_login">{miTipo=="register"? "REGISTER":"LOGIN"}</h1>
            <form className="login_form" onSubmit={handlerForm}>
                {miTipo=="register"? <input type="text" placeholder="email" name="email" className="email"></input>:""}
                <input type="text" placeholder="Usuario" className="user" name="user"/>
                <input type="password" placeholder="Contraseña" name="password" className="password"/>
                <input type="submit" value={miTipo=="register"? "REGISTRARSE":"INICIAR SESION"} className="enviar"/>
            </form>
            </div>
            )}
    </>
    )
}