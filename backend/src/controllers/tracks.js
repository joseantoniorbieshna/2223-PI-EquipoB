import tracksModel from '../models/tracks.js'
import { comprobarYBorrarArchivos } from '../utils/handlerFile.js';

export async function getTracks (req,res){
    console.log("peticion obtener todos los tracks");
    const data = await tracksModel.find({})
    res.send({data})
}

export async function getTracksById (req,res){
    console.log(`Obtener track by id: ${req.params.id} `);
    const data = await tracksModel.find({id: req.params.id})
    res.send({data})
}
export async function getTracksByCategory (req,res){
    const category = req.params.category.toLowerCase()
    
    console.log(`Obtener track by category: ${category} `);
    const data = await tracksModel.find({category: category})
    res.send({data})
}


export async function getTracksBySearch (req,res){
    const {query} = req
    console.log(`Obtener track search: ${query} `);
    console.log(query.name);
    let data= []
    if(query.name){
        data = await tracksModel.find({$or: [{name: { $regex: query.name, $options : 'i'} },{artist: { $regex: query.name, $options : 'i'} }]})
    }
    res.send({data})
}

export async function createTrack(req,res){
    console.log("peticion crear tracks");
    const {files,body} = req
    let {name,artist,category} = body
    const {song,img} = files

    /*COMPROBACIÓN*/
    if(name && artist && song && img && category){
        try{
            category = category.toLowerCase()
            const data = await tracksModel.create({name: name,artist: artist,category: category, song: song[0].filename, img: img[0].filename})
            res.send({data})
            return
        }catch{
            comprobarYBorrarArchivos([song,img])
            console.log("Algun campo no es invalio.");
            res.status(500).send({data:"error algun dato es invalido"})
            return
        }
    }

    comprobarYBorrarArchivos([song,img])
    console.log("Algun campo no ha sido introducido.");
    res.status(500).send({data:"err falta algun dato"})
    return
}