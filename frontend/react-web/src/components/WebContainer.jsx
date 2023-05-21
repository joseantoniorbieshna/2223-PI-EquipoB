import SongContainer from "./SongContainer";
import SearchForm from "./SearchForm";
import Categories from "./Categories";

import {Navigate} from "react-router-dom"
import {getCookie} from "../utils/cookies"
import { useState,useEffect } from "react";
import {getURLMusic,getURLAlbum} from "../utils/utils"
import {volumeController,playController} from "../controller/audioController"
import useTracks from "../hooks/useTracks";

/*IMAGES*/
import playButton from "../assets/images/play-square.png"
import pauseButton from "../assets/images/pause-square.png"

export default function WebContainer(){
    const [tracks,setTracks,setFirstTracks] = useTracks([])
    const[isplay,setPlay]=useState(false)
    const [reproductor,setReproductor]= useState({name:"unknown",artist:"unknown"})
    
    const categories = ["pop","rock","techno","reggaeton"]
    
    const session = getCookie()?true:false;

    useEffect(()=>{
        setFirstTracks()
    },[])
    /**/

    return(
    <main>
        {!session &&( <Navigate to="/" replace={true} />)}

    <Categories setTracks={setTracks}> </Categories>



    <div className="music_manage_container">
        <SearchForm setTracks={setTracks}></SearchForm>
        <div className="music_container">
            {tracks.map((value,index)=>{
                const linkSong=`${getURLMusic()}/${value.song}`
                const linkImg=`${getURLAlbum()}/${value.img}`
                return <SongContainer nameSong={value.name} nameArtist={value.artist} linkSong={linkSong} linkImg={linkImg} 
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