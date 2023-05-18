import "./css/MusicContainer.css"
import {Navigate} from "react-router-dom"
import {getCookie} from "../utils/cookies"

export default function MusicContainer(){
    const session = getCookie()?true:false;
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

            <form className="mybuscador" action="">
                <input className="texto" type="text" placeholder="introduce cancion"/>
                <input className="enviar" type="submit" value="BUSCAR" />
            </form>
            
            <div className="music_container" >
                <div className="gap_top"></div>


                <div className="songs_container">
                    <div className="song_container">
                        <p className="song_title">TITULO MUSICA</p>
                        <p className="song_artist">NOMBRE ARTISTA</p>
                    </div>
                           <div className="song_container">
                        <p className="song_title">TITULO MUSICA</p>
                        <p className="song_artist">NOMBRE ARTISTA</p>
                    </div>
                </div>
                <div className="gap_down"></div>
            </div>
            <div className="reproductor">
            </div>
        </div>
    </main>
    )
}