import React from "react";
import { getTracksByCategory } from "../services/queryTracks";

export default function Categories({setTracks}){
    const categories = ["pop","rock","techno","reggaeton"]

    return(
        <div className="categorias">
        <h1>CATEGORIAS</h1>
        <ol>
            
            {
            categories.map( (category, index)=>{
              
                return <li key={index} onClick={ async ()=>{
                    const data = await getTracksByCategory(category)
                    setTracks(data.data)
                }} >{category}</li>
                
            })
            }

        </ol>
    </div>




    )
}