import React from "react";
import {getTracksBySearch} from "../services/queryTracks.js"

export default function SearchForm({setTracks}){
    return(
        <form className="mybuscador" onSubmit={async (event)=>{
            event.preventDefault();
            const inputData = event.currentTarget.name.value;
            const res = await getTracksBySearch(inputData);
            setTracks(res.data)
        }}>

            <input className="texto" name="name" type="text" placeholder="introduce cancion"/>
            <input className="enviar" type="submit" value="BUSCAR" />
        </form>
    )
}