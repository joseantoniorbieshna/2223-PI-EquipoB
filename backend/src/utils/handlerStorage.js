import { log } from "console";
import express from "express";
import multer from 'multer'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const storage = multer.diskStorage({
    destination:function(req,file,callback){

        const ext = file.originalname.split(".").pop();
        
        
        let pathStorage
        if(ext=="mp3"){
            pathStorage = `${__dirname}/../storage/musics`
        }else{
            pathStorage = `${__dirname}/../storage/images`
        }


        callback(null,pathStorage) //Primer argumento error, y segundo el path
    },
    filename:function(req,file,callback){//si pones el mismo nombre se sobrescribe, si le das otro nombre crea otro nuevo

    const ext = file.originalname.split(".").pop()
    const filename = `file-${Date.now()}.${ext}`
    callback(null,filename) // 1 param error y 2 param asignar nombre al archivo
    }
})


const uploadMiddleware = multer({storage})
export default uploadMiddleware