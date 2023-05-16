import storageModel from "../models/storage.js"
const PUBLIC_URL = process.env.PUBLIC_URL

/**
 *  SUBIR ARCHIVO
 * @param {*} req 
 * @param {*} res 
 */
const createStorage = async (req,res)=>{
    console.log("Petición storage")
    const {body,hola,file} = req
    console.log(body);
    const fileObject= {
        url:`${PUBLIC_URL}/${file.filename}`,
        filename:file.filename
    }
    const data = await storageModel.create(fileObject)
    res.send({data})
}

export {createStorage}