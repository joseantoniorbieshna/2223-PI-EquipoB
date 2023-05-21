import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import unkwnownImage from "../assets/images/unknown-image-pocha.jpg"

import playButton from "../assets/images/play-square.png"

export default function SongContainer({nameSong,nameArtist,linkSong,linkImg,setPlay,setReproductor}){
    const [myImage,setImage] = useState()

    const comprobarImagen = async ()=>{
        const res = await fetch(linkImg)
        res.status==200?setImage(linkImg):setImage(unkwnownImage)
    }

    useEffect( ()=>{
        comprobarImagen()
    },[])

    return(
        <div className="song_container"  style={{ backgroundImage: `url(${myImage})`} }>
                <button onClick={async ()=>{
                    let sonido= document.querySelector("audio");
                    sonido.src =linkSong;
                    sonido.load()
                    setPlay(false)
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
    )
}
