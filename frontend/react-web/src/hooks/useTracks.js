import React from "react";
import { useState } from "react";
import {getTracks} from "../services/queryTracks"

export default function useTracks(){
    let [tracks,setTracks] = useState([])
    let setFirstTracks = async ()=>{
        try{
            const res=await getTracks()
            setTracks(res.data)
        }catch{
            console.log("error al cargar las canciones");
        }
    }
    return [tracks,setTracks,setFirstTracks]
}