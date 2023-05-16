import mongoose from 'mongoose'
import userModel from '../models/users.js'


/**
 *  OBTENER TODOS LOS USER
 * @param {*} req 
 * @param {*} res 
 */
const getUsers = async (req,res)=>{
    console.log("Petición get users")
    const data= await userModel.find({})
    res.send({data})
}


/**
 *  OBTENER UN UNICO USER
 * pasar por parametro user and password
 * @param {*} req 
 * @param {*} res 
 */
const getUserById = async (req,res)=>{
    console.log("Petición get 1 user by id")
    const idFind = req.params.id
    try{
        const data = await userModel.findOne({_id:new mongoose.Types.ObjectId(idFind)},{_id:1,user:1,role:1}).exec()
        res.send({data})
        return
    }catch(err){
        res.send({error:"Error al buscar usuario"})
        console.log(err);
        return
    }
}
/**
 *  OBTENER UN UNICO USER
 * pasar por parametro user and password
 * @param {*} req 
 * @param {*} res 
 */
const getUserId = async (req,res)=>{
    console.log("Petición get 1 user")
    let data
    const userFind = req.query.user
    const passwordFind = req.query.password
    try{
        data = await userModel.findOne({ $and: [{user: userFind} , {password: passwordFind}] },{_id:1}).exec()
        res.send({data})
        return
    }catch{
        res.send({error:"Error al buscar usuario"})
        return
    }
}


/**
 *  CREAR USUARIO
 * @param {*} req 
 * @param {*} res 
 */


const createUser = async (req,res)=>{
    console.log("Petición crear user")
    const {body} = req
    let data
    try{
        data = await userModel.create(body)
    }catch{
        res.send({error:"error al crear usuario"})
        return
    }
    res.send({data})
}



/**
 * ACTUALIZAR USUARIO
 * @param {*} req 
 * @param {*} res 
 */
const updateUser = async (req,res)=>{
    console.log("Petición get user")

    const data= await userModel.find({})
    res.send(data)
}



/**
 * BORRAR USUARIO
 * @param {*} req 
 * @param {*} res 
 */
const deleteUser = async (req,res)=>{
    console.log("Petición get user")

    const data= await userModel.find({})
    res.send(data)
}



export {getUsers,getUserId,getUserById,createUser,updateUser,deleteUser}