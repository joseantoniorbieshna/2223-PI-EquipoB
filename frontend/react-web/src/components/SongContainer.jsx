import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import unkwnownImage from "../assets/unknown-image-pocha.jpg"


export default function SongContainer({nameSong,nameArtist,linkSong,linkAlbum,setPlay}){
    const [myImage,setImage] = useState()

    const comprobarImagen = async ()=>{
        const res = await fetch(linkAlbum)
        res.status==200?setImage(linkAlbum):setImage(unkwnownImage)
    }

    useEffect( ()=>{
        comprobarImagen()
    },[])

    return(
        <div className="song_container"  style={{ backgroundImage: `url(${myImage})`} }>
                <p className="song_title"  >{nameSong}</p>
                <p className="song_artist"  >{nameArtist}</p>
                <button onClick={async ()=>{
                    let sonido= document.querySelector("audio");
                    sonido.src =linkSong;
                    sonido.load()
                    setPlay(false)
                }} >PLAY</button>
        </div>
    )
}
