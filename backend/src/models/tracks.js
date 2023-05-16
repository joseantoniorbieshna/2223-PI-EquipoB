import mongoose, { Mongoose, mongo } from "mongoose";

const tracksSchema = new mongoose.Schema(
{
    name:{
        type: String
    },
    artist:{
        type: String
    },
    Album:{
        type:{
            type: String
        }
    },
    song:{
        type: String
    }

},
{
    versionKey: false
})

export default new mongoose.model("tracks",tracksSchema)