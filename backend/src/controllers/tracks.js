import tracksModel from '../models/tracks.js'

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
    console.log(`Obtener track search: ${req.query} `);
    console.log(req.query)
    const data = await tracksModel.find({})
    res.send({data})
}

export async function createTrack(req,res){
    console.log("peticion crear tracks");
    const {file,body} = req
    const {name,artist,category,album} = body
    if(name && artist && file && category && album){
        try{
            const data = await tracksModel.create({name: name,artist:artist,category: category,song: file.filename, album: album})
            res.send({data:"Creado exitosamente"})
            return
        }catch{
            res.send({err:"error al crear track"})

        }
    }
    res.send({data:1})
}