import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        email:{
            type:String,
            unique:true,
        },
        user: {
            type: String,
            unique: true,
        },
        password: {
            type: String,
        },
        role:{
            type:["user","admin"],
            default:"user",
        }
    },{
        timestamps:true,
        versionKey:false,
    }
)
export default mongoose.model('users',userSchema)