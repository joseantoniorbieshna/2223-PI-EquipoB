import React from "react";

import {volumeController,playController} from "../controller/audioController"


/*IMAGES*/
import playButton from "../assets/images/play-square.png"
import pauseButton from "../assets/images/pause-square.png"
import volumeImg from "../assets/images/volume.png"
import moveSong from "../assets/images/move-song.png"
import { useEffect } from "react";
import useMobile from "../hooks/useMobile";

import unkwnownImage from "../assets/images/unknown-image-pocha.jpg"
import { useState } from "react";


export default function Reproductor({isplay,setPlay, reproductor, linkImg=null}){
    const [isMobile,getIsMobile] = useMobile()


    const changeVolume = (number,isplay)=>{
        const myAudio = document.querySelector("audio")
        myAudio.currentTime+=number;

        if(number<0 && isplay){
            myAudio.play()
        }
    }


    const [myImage,setImage] = useState()

    const comprobarImagen = async ()=>{
        if(linkImg){
        const res = await fetch(linkImg)
        res.status==200?setImage(linkImg):setImage(unkwnownImage)
        }else{
            setImage(unkwnownImage)
        }
    }

    useEffect(()=>{
        getIsMobile()
        window.addEventListener("resize",()=>{getIsMobile()})

        comprobarImagen()
    },[])

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


        {/* {isMobile &&(
        <div className="mobile_container">
            <div className="mobile_foto_container">
                <img src={myImage}/>
            </div>
            <div className="reproductor_mobile">
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
            </div>
        </div>
        )} */}


        <audio src="https://manzdev.github.io/codevember2017/assets/eye-tiger.mp3" preload="auto"></audio>
        </>
    )
}