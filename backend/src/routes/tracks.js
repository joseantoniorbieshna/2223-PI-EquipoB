import express from "express";
import uploadMiddleware from '../utils/handlerStorage.js'
import {createTrack, getTracks, getTracksByCategory, getTracksById, getTracksBySearch} from "../controllers/tracks.js"

const router = express.Router()

router.get("/search",getTracksBySearch)
router.get('/category/:category',getTracksByCategory)
router.get("/",getTracks)
router.post("/",uploadMiddleware.fields( [{name:"song", maxCount:1},{name:"img", maxCount:1}] ),createTrack)

export default router