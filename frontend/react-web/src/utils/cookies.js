export function saveCookie(object){
    localStorage.setItem("session", object)
}

export function getCookie(){
    return localStorage.getItem("session")
}