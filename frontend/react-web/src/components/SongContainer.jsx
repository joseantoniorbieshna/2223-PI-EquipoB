import { useEffect } from "react";
import React from "react";
import { useState } from "react";
import unkwnownImage from "../assets/images/unknown-image-pocha.jpg"

import playButton from "../assets/images/play-square.png"
import useMobile from "../hooks/useMobile";

export default function SongContainer({nameSong,nameArtist,linkSong,linkImg,setPlay,setReproductor}){
    const [myImage,setImage] = useState()

    const [isMobile,getIsMobile] = useMobile()

    const comprobarImagen = async ()=>{
        const res = await fetch(linkImg)
        res.status==200?setImage(linkImg):setImage(unkwnownImage)
    }

    useEffect( ()=>{
        comprobarImagen()

        getIsMobile()
        window.addEventListener("resize",()=>{getIsMobile()})

    },[])

    return(
    <>
<div className="song_container"  >
                <img src={myImage} alt="" />
                <button onClick={async ()=>{
                    let sonido= document.querySelector("audio");
                    sonido.src =linkSong;
                    sonido.load()
                    sonido.play()
                    setPlay(true)
                    setReproductor({
                        name:nameSong,
                        artist:nameArtist
                    })
                }} className="play_button"> <img src={playButton}></img> </button>
                <div className="song_info">
                    <p className="song_title"  >{nameSong}</p>
                    <p className="song_artist"  >{nameArtist}</p>
                </div>
            </div>
        {/* {isMobile && (<hr/>)} */}


    </>
    )
}
