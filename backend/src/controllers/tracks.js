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
    const {name,artist,category} = body

    /*COMPROBACIÓN*/
    if(name && artist && files["song"] && files["album"] && category){
        try{
            const data = await tracksModel.create({name: name,artist: artist,category: category,song: files.song[0].filename, album: files.album[0].filename})
            res.send({data})
            return
        }catch{
            console.log("error al crear track");
        }
    }

    comprobarYBorrarArchivos([files["song"],files["album"]])

    res.status(500).send({data:"err falta algun dato"})
}