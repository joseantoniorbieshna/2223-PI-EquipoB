

function clickLoginAndRegis(){

    const invisibleLoginAndRegis=()=>{
        document.querySelector(".login").style.display = "none"
        document.querySelector(".register").style.display = "none"
    }

    let login
    let register
    //login
    document.querySelector(".iniciar_sesion").addEventListener("click",(algo)=>{
       invisibleLoginAndRegis()

       login = document.querySelector(".login")
       login.style.display = "block"
    })
    
    //register
    document.querySelector(".registrate").addEventListener("click",(algo)=>{

        register = document.querySelector(".register")
        register.style.display = "block"
    })

    //cerrar boton
    document.querySelectorAll(".close").forEach( (elem)=>{
        elem.addEventListener("click",(algo)=>{
            invisibleLoginAndRegis()
         })
    })
}





async function createUser(){
    const emailData = document.querySelector(".register_form .email").value
    const userData = document.querySelector(".register_form .user").value
    const passwordData = document.querySelector(".register_form .password").value


    if(emailData && userData && passwordData){
        const response = await fetch('http://localhost:3010/api/users', {
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
}





async function loginUser(){
    const userData = document.querySelector(".login_form .user").value
    const passwordData = document.querySelector(".login_form .password").value
    const params = `?user=${userData}&password=${passwordData}`
    
    if(userData && passwordData){
            const response = await fetch(`http://localhost:3010/api/users/search/${params}`)
        
            const data = await response.json()
            // comprobar si me retorna id la api
            try{
                if(data["data"]["_id"]){
                    console.log("Contraseña y usuario Correcto");
                    saveCookie(data["data"]["_id"])
                    console.log(data);
                    window.location.href = "./into-page/page.html";
                }
            }catch{
                console.log("Error usuario o contraseña incorrecto")
            }
    }
}



function saveCookie(object){
    localStorage.setItem("session", object)
}

function getCookie(){
    return localStorage.getItem("session")
}