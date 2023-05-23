import SongContainer from "./SongContainer";
import SearchForm from "./SearchForm";
import Categories from "./Categories";

import { useState,useEffect } from "react";
import {getURLMusic,getURLAlbum} from "../utils/utils"
import useTracks from "../hooks/useTracks";
import Reproductor from "./Reproductor";

export default function WebContainer(){
    const [tracks,setTracks,setFirstTracks] = useTracks([])
    const[isplay,setPlay]=useState(false)
    const [reproductor,setReproductor]= useState({name:"unknown",artist:"unknown"})
    
    const categories = ["pop","rock","techno","reggaeton"]

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
            <Reproductor isplay={isplay} setPlay={setPlay} reproductor={reproductor}></Reproductor>
    </div>
</main>
)
}