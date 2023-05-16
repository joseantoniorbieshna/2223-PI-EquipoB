import mongoose from "mongoose";

const storageSchema = new mongoose.Schema(
    {
        url:{
            type: String
        },
        filename:{
            type: String
        }
    },
    {
        versionKey: false
    }
)

export default new mongoose.model("storage",storageSchema)