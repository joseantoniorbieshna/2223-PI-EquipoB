import express from "express";
import {createTrack, getTracks, getTracksById, getTracksBySearch} from "../controllers/tracks.js"

const router = express.Router()

router.get("/search",getTracksBySearch)
router.get("/",getTracks)
router.post("/",createTrack)

export default router