import React from "react";
import { useState } from "react";
import {getTracks} from "../services/queryTracks"
import {Navigate} from "react-router-dom"
import {getCookie} from "../utils/cookies"
import { getUserById } from "../services/queryUser";

export default function useSession(){
    let [session,setSession] = useState()

    const getSession = async ()=>{
        const idSession = getCookie()
        if(idSession){
            try{
                const mySession = await getUserById(idSession);
                setSession(mySession)
                return
            }catch{
            }
        }
        setSession("no login")
    }
    return [session,getSession];
}