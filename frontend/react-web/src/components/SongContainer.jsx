import React from "react";


export default function SongContainer({nameSong,nameArtist,actualKey}){

    return(
        <div className="song_container" key={actualKey}>
                <p className="song_title" >{nameSong}</p>
                <p className="song_artist" >{nameArtist}</p>
        </div>
    )
}
