import React from "react";

import {volumeController,playController} from "../controller/audioController"


/*IMAGES*/
import playButton from "../assets/images/play-square.png"
import pauseButton from "../assets/images/pause-square.png"
import volumeImg from "../assets/images/volume.png"
import moveSong from "../assets/images/move-song.png"

export default function Reproductor({isplay,setPlay, reproductor}){

    const changeVolume = (number,isplay)=>{
        const myAudio = document.querySelector("audio")
        myAudio.currentTime+=number;
        if(number<0 && isplay){
            myAudio.play()
        }
    }

    return(
        <>
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
        </>
    )
}