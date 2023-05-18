import {Navigate} from "react-router-dom"
import {getCookie} from "../utils/cookies"
import SongContainer from "./SongContainer";
import {getTracks} from "../services/queryTracks"
import { useState,useEffect } from "react";

export default function MusicContainer(){
    const[isplay,setPlay]=useState(false)
    const [songs,setSongs] = useState([])
    const session = getCookie()?true:false;
    const fetchTracks = ()=>{
    getTracks()
    .then((res)=>{
        setSongs(res.data)
    })
    .catch(console.log("error"))
    }



    useEffect(()=>{
        fetchTracks()
    },[])

    return(
        <main>
            {!session &&( <Navigate to="/" replace={true} />)}
            <audio src="https://manzdev.github.io/codevember2017/assets/eye-tiger.mp3" preload="auto" loop></audio>
        <div className="categorias">
            <h1>CATEGORIAS</h1>
            <ol>
                <li>POP</li>
                <li>ELECTRO</li>
                <li>...</li>
            </ol>
        </div>
        <div className="music_manage_container">

            <form className="mybuscador" action="">
                <input className="texto" type="text" placeholder="introduce cancion"/>
                <input className="enviar" type="submit" value="BUSCAR" />
            </form>
                    <div className="music_container">
                        
                        {songs.map((value,index)=>{
                            return <SongContainer nameSong={value.name}nameArtist={value.artist}actualKey={index}></SongContainer>
                        })}

                        <div className="bottom_gap"></div>
                    </div>
                    <div className="reproductor">
                        <button className="play_button" onClick={(event)=>{
                            if(isplay){document.querySelector("audio").pause(); setPlay(false)}
                            else{document.querySelector("audio").play();setPlay(true)}
                            console.log("pene");
                        }}>{isplay?"PAUSE":"PLAY"}</button>
                    </div>
        </div>
    </main>
    )
}