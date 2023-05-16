import express from "express";
import multer from 'multer'
import uploadMiddleware from '../utils/handlerStorage.js'
import {createStorage} from '../controllers/storage.js'
const router = express.Router();

router.post("/",uploadMiddleware.single("archivo"),createStorage) //nombre de la key en form-data: archivo

export default router