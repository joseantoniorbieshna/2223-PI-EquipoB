import React from "react";


export default function SongContainer({nameSong,nameArtist,linkSong,setPlay,actualKey}){

    return(
        <div className="song_container" key={actualKey}>
                <p className="song_title" >{nameSong}</p>
                <p className="song_artist" >{nameArtist}</p>
                <button onClick={async ()=>{

                    let sonido= document.querySelector("audio");
                    sonido.src =linkSong;
                    sonido.load()
                    setPlay(false)
                }}>OLA</button>
        </div>
    )
}
