import getURI from "../utils/utils"
import {saveCookie} from "../utils/cookies"

export async function createUser(emailData,userData,passwordData){
    const response = await fetch(`${getURI()}/users`, {
        method: 'POST',
        body: JSON.stringify({
            email:  emailData,
            user: userData,
            password: passwordData,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
    })

    const data = await response.json()

    if(data["data"]){
        console.log("Guardado con exito")
    }
    console.log(data)
}



export async function loginUser(userData,passwordData){
    const params = `?user=${userData}&password=${passwordData}`
    
    if(userData && passwordData){
            const response = await fetch(`${getURI()}/users/search/${params}`)
        
            const data = await response.json()
            // comprobar si me retorna id la api

            //console.log(data);
            try{
                if(data["data"]["_id"]){
                    console.log("Contraseña y usuario Correcto");
                    saveCookie(data["data"]["_id"])
                }
            }catch{
                console.log("Error usuario o contraseña incorrecto")
            }
    }
}