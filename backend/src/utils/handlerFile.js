import fs from "fs";


export function comprobarYBorrarArchivos(archivos){
    archivos.forEach(archivo => {

        if(archivo){
            let pathDirectory=archivo[0].path;
            try {
                fs.unlinkSync(pathDirectory);
                console.log("Archivo introducido borrado con exito!!");
              } catch (error) {
                console.log(error);
              }
        }

    });

}

export function isMusic(ext){
    if (ext=".mp3"){
        return true
    }
    return false
}
export function isFoto(){
    if (ext=".jpg"){
        return true
    }
    return false
}