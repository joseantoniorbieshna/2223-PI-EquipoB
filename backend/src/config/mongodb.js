import mongoose from 'mongoose'
import 'dotenv/config.js'

const MONGODB_URI= process.env.MONGODB_URI
const OPTIONS = {useNewUrlParser: true, useUnifiedTopology: true, authSource: "admin"}
const dbConnect= async ()=>{
    await mongoose.connect(MONGODB_URI,OPTIONS)
}

export default dbConnect