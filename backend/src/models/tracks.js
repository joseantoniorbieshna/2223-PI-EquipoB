import mongoose, { Mongoose, mongo } from "mongoose";

const tracksSchema = new mongoose.Schema(
{
    name:{
        type: String
    },
    artist:{
        type: String
    },
    category:{
        type: String,
        enum: ["pop","rock","techno","reggaeton"]
    }
    ,
    img:{
        type: String
    },
    song:{
        type: String
    }

},
{
    versionKey: false
})

export default new mongoose.model("tracks",tracksSchema)