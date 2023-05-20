import getURI, { getURLTracks } from "../utils/utils"
import {saveCookie} from "../utils/cookies"
import { Navigate } from "react-router-dom";
import { loginUser } from "./queryUser";



export async function getTracks(){
    
            const response = await fetch(`${getURI()}/tracks/`)
        
            const data = await response.json()
            
            return data
    
}


export async function getTracksBySearch(search){
    const queryParams = `?name=${search}`
    
    if (search){
        const response = await fetch(`${getURLTracks()}/search${queryParams}`)
        console.log(`${getURLTracks()}/search${queryParams}`);
        const data = await response.json()
        return data
    }

    return getTracks()

}