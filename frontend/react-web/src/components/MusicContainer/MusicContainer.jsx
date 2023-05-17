import "./MusicContainer.css"

export default function MusicContainer(){
    return(
        <main>
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
                <div className="emptygap"></div>
                <div className="gap_top"></div>
                <div style={{backgroundColor: 'green', height: '10%', width: "100%"}}>sadf</div>
                <div style={{backgroundColor: 'green', height: '10%', width: "100%"}}>sadf</div>
                <div style={{backgroundColor: 'green', height: '10%', width: "100%"}}>daf</div>
                <div style={{backgroundColor: 'green', height: '10%', width: "100%"}}>sa</div>
                <div style={{backgroundColor: 'green', height: '10%', width: "100%"}}>sadf</div>
                <div style={{backgroundColor: 'green', height: '10%', width: "100%"}}>sadf</div>
                <div style={{backgroundColor: 'green', height: '10%', width: "100%"}}>asfd</div>
                <div style={{backgroundColor: 'green', height: '10%', width: "100%"}}>sa</div>
                <div style={{backgroundColor: 'green', height: '10%', width: "100%"}}>a</div>
                <div style={{backgroundColor: 'green', height: '10%', width: "100%"}}>asd</div>
                <div style={{backgroundColor: 'green', height: '10%', width: "100%"}}>sadf</div>
                <div style={{backgroundColor: 'green', height: '10%', width: "100%"}}>dsaf</div>
                <div style={{backgroundColor: 'green', height: '10%', width: "100%"}}>sadf</div>
                <div style={{backgroundColor: 'green', height: '10%', width: "100%"}}>safd</div>
                <div style={{backgroundColor: 'green', height: '10%', width: "100%"}}>asfdsa</div>
                <div style={{backgroundColor: 'green', height: '10%', width: "100%"}}>asfdas</div>
                <div className="gap_down"></div>

            </div>
            <div className="reproductor">
            </div>
        </div>
    </main>
    )
}