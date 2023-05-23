import SongContainer from "./SongContainer";
import SearchForm from "./SearchForm";
import Categories from "./Categories";

import { useState,useEffect } from "react";
import {getURLMusic,getURLAlbum} from "../utils/utils"
import {volumeController,playController} from "../controller/audioController"
import useTracks from "../hooks/useTracks";

/*IMAGES*/
import playButton from "../assets/images/play-square.png"
import pauseButton from "../assets/images/pause-square.png"
import moveSong from "../assets/images/move-song.png"
import volumeImg from "../assets/images/volume.png"

export default function WebContainer(){
    const [tracks,setTracks,setFirstTracks] = useTracks([])
    const[isplay,setPlay]=useState(false)
    const [reproductor,setReproductor]= useState({name:"unknown",artist:"unknown"})
    
    const categories = ["pop","rock","techno","reggaeton"]
    
    const changeVolume = (number,isplay)=>{
        const myAudio = document.querySelector("audio")
        myAudio.currentTime+=number;
        if(number<0 && isplay){
            myAudio.play()
        }
    }

    useEffect(()=>{
        setFirstTracks()
    },[])
    /**/

    return(
    <main>

    <Categories setTracks={setTracks}> </Categories>



    <div className="music_manage_container">
        <div className="music_container">
        <div className="search_container">
            <SearchForm setTracks={setTracks}></SearchForm>
        </div>
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

            <div className="control_music">
                <button onClick={(event)=>{changeVolume(-5,isplay)}} className="left_move"><img src={moveSong}/></button>

                <button className="play_button"  onClick={(event)=>{ playController(event,isplay,setPlay) }}>
                    {!isplay?<img src={playButton}/>:<img src={pauseButton}/>}</button>
                <button  onClick={(event)=>{changeVolume(+5,isplay)}} className="right_move"><img src={moveSong}/></button>
            </div>

            <div className="volume_controller">
                <img className="speaker_img" src={volumeImg}  />
            <input type="range" defaultValue={100} className="slider" onChange={volumeController}/>
            </div>
        </div>
            <audio src="https://manzdev.github.io/codevember2017/assets/eye-tiger.mp3" preload="auto"></audio>
    </div>
</main>
)
}