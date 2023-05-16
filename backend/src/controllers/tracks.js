import tracksModel from '../models/tracks.js'

export async function getTracks (req,res){
    console.log("peticion crear tracks");
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
    const data = await tracksModel.find({})
    res.send({data:1})
}