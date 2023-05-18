import getURI from "../utils/utils"
import {saveCookie} from "../utils/cookies"
import { Navigate } from "react-router-dom";



export async function getTracks(){
    
            const response = await fetch(`${getURI()}/tracks/`)
        
            const data = await response.json()
            
            return data
    
}