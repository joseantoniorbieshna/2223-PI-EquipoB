import express from 'express'
import fs from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PATH_ROUTES = __dirname;

const removeExtension = (fileName)=>{
    return fileName.split('.').shift()
}

fs.readdirSync(PATH_ROUTES).filter( async (file)=>{
    console.log(file)
    const name = removeExtension(file)
    if (name!=='index'){
        const moduleName = (await import(`./${file}`)).default
        router.use(`/${name}`,moduleName)
    }
})


export default router