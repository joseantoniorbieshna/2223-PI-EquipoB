

export async function playController(event,isplay,setPlay){
    const boton = document.querySelector("audio")
    if(isplay){
        boton.pause();
        setPlay(false)}
    else{
        boton.play()
        setPlay(true)}
}

export function volumeController(event){
    const boton = document.querySelector("audio")
    boton.volume=event.target.value/100
}