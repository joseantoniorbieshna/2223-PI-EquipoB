async function createUser(emailData,userData,passwordData){
    const response = await fetch(`/api/users`, {
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