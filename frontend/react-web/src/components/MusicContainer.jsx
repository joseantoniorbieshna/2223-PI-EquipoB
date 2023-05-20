import {Navigate} from "react-router-dom"
import {getCookie} from "../utils/cookies"
import SongContainer from "./SongContainer";
import { useState,useEffect } from "react";
import {getURLMusic,getURLAlbum} from "../utils/utils"
import {volumeController,playController} from "../controller/audioController"

import playButton from "../assets/images/play-square.png"
import pauseButton from "../assets/images/pause-square.png"
import SearchForm from "./SearchForm";
import useTracks from "../hooks/useTracks";

export default function MusicContainer(){
    const [tracks,setTracks,setFirstTracks] = useTracks([])
    
    const [reproductor,setReproductor]= useState({name:"unknown",artist:"unknown"})
    const[isplay,setPlay]=useState(false)
    const session = getCookie()?true:false;
    /*TRAER CANCIONES*/

    useEffect(()=>{
        setFirstTracks()
    },[])
    /**/

    return(
    <main>
        {!session &&( <Navigate to="/" replace={true} />)}

    <div className="categorias">
        <h1>CATEGORIAS</h1>
        <ol>
            <li>POP</li>
            <li>ELECTRO</li>
            <li>...</li>
        </ol>
    </div>
    <div className="music_manage_container">
        <SearchForm setTracks={setTracks}></SearchForm>
        <div className="music_container">
            {tracks.map((value,index)=>{
                const linkSong=`${getURLMusic()}/${value.song}`
                const linkAlbum=`${getURLAlbum()}/${value.album}`
                return <SongContainer nameSong={value.name} nameArtist={value.artist} linkSong={linkSong} linkAlbum={linkAlbum} 
                setPlay={setPlay} setReproductor={setReproductor} key={index}></SongContainer>
            })}

            <div className="bottom_gap"></div>
        </div>
        <div className="reproductor">
            <div className="music_info">
                <h1>{reproductor.name}</h1>
                <h3>{reproductor.artist}</h3>
            </div>

            <button className="play_button"  onClick={(event)=>{ playController(event,isplay,setPlay) }}>
                {!isplay?<img src={playButton}/>:<img src={pauseButton}/>}</button>
            <input type="range" defaultValue={100} className="slider" onChange={volumeController}/>
        </div>
            <audio src="https://manzdev.github.io/codevember2017/assets/eye-tiger.mp3" preload="auto"></audio>
    </div>
</main>
)
}